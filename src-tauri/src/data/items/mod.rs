use super::{Data, DATA_DIRECTORY_NAME, LOCAL_DIRECTORY, LOCAL_DIRECTORY_NAME};
use bincode::{deserialize, serialize};
use serde::{Deserialize, Serialize};
use std::{
    fs::File,
    io::{BufRead, BufReader, Write},
    time::{SystemTime, UNIX_EPOCH},
};
use tauri::command;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
struct Color {
    red: u8,
    green: u8,
    blue: u8,
}

#[derive(Debug, Serialize, Deserialize)]
struct Tag {
    id: String,
    title: String,
    color: Color,
}

#[derive(Debug, Serialize, Deserialize)]
struct Progress {
    current: u32,
    maximum: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Directory {
    id: String,
    title: String,
    list: Vec<Item>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Note {
    id: String,
    title: String,
    short_description: String,
    created_at: u64,
    updated_at: u64,
    progress: Progress,
    tags: Vec<Tag>,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum Item {
    Directory(Directory),
    Note(Note),
}

impl Progress {
    fn new() -> Self {
        Self {
            current: 0,
            maximum: 0,
        }
    }
}

impl Directory {
    fn new() -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title: "".into(),
            list: Vec::new(),
        }
    }
}

impl Note {
    fn new() -> Self {
        let time = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap()
            .as_secs();

        Self {
            id: Uuid::new_v4().to_string(),
            title: "".into(),
            short_description: "".into(),
            created_at: time,
            updated_at: time,
            progress: Progress::new(),
            tags: Vec::new(),
        }
    }
}

#[command]
pub fn create_note() {
    let mut data = Data::read();
    let note = Note::new();

    let mut file = File::create(format!(
        "{}/{}/{}/{}",
        &LOCAL_DIRECTORY.lock().unwrap(),
        LOCAL_DIRECTORY_NAME,
        DATA_DIRECTORY_NAME,
        &note.id
    ))
    .unwrap();
    let content: String = "# ".into();
    let serialized_content = serialize(&content).unwrap();
    let buf = serialized_content.as_slice();

    file.write_all(buf).unwrap();

    data.push(Item::Note(note));
    Data::write(data);
}

#[command]
pub fn read_note(id: String) -> String {
    let file = File::open(format!(
        "{}/{}/{}/{}",
        &LOCAL_DIRECTORY.lock().unwrap(),
        LOCAL_DIRECTORY_NAME,
        DATA_DIRECTORY_NAME,
        id
    ))
    .expect("File not found");
    let mut reader = BufReader::new(file);
    let buf = reader.fill_buf().unwrap();
    let data: String = deserialize(buf).unwrap();

    data
}

#[command]
pub fn write_note(id: String, content: String) -> String {
    let mut file = File::options()
        .write(true)
        .open(format!(
            "{}/{}/{}/{}",
            &LOCAL_DIRECTORY.lock().unwrap(),
            LOCAL_DIRECTORY_NAME,
            DATA_DIRECTORY_NAME,
            id
        ))
        .expect("File not found");
    let serialized_data = serialize(&content).unwrap();
    let buf = serialized_data.as_slice();

    file.write_all(buf).unwrap();

    content
}

#[command]
pub fn create_directory() {
    let mut data = Data::read();
    let directory = Directory::new();

    data.push(Item::Directory(directory));
    Data::write(data);
}
