use std::{time::{SystemTime, UNIX_EPOCH}};

use super::Profile;
use serde::Serialize;
use tauri::{command, State};
use uuid::Uuid;

#[derive(Clone, Debug, Serialize)]
struct Color {
    red: u8,
    green: u8,
    blue: u8,
}

#[derive(Clone, Debug, Serialize)]
struct Tag {
    id: String,
    title: String,
    color: Color,
}

#[derive(Clone, Debug, Serialize)]
struct Progress {
    current: u32,
    maximum: u32,
}

#[derive(Clone, Debug, Serialize)]
pub struct Note {
    id: String,
    title: String,
    content: String,
    created_at: u64,
    updated_at: u64,
    progress: Progress,
    tags: Vec<Tag>,
}

#[derive(Clone, Debug, Serialize)]
pub struct Folder {
    id: String,
    title: String,
    list: Vec<Item>
}

#[derive(Clone, Debug, Serialize)]
pub enum Item {
    Folder(Folder),
    Note(Note)
}

impl Color {
    fn new(red: u8, green: u8, blue: u8) -> Self {
        Self {
            red,
            green,
            blue
        }
    }
}

impl Tag {
    fn new(title: String, color: Color) -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title,
            color
        }
    }
}

impl Progress {
   fn new() -> Self {
       Self {
           current: 0,
           maximum: 0
       }
   }
}

impl Note {
    pub fn new() -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title: "".into(),
            content: "".into(),
            created_at: SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs(),
            updated_at: SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs(),
            progress: Progress::new(),
            tags: Vec::new(),
        }
    }

    pub fn test(content: String, progress_cur: u32, progress_max: u32) -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title: content.clone(),
            content,
            created_at: SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs(),
            updated_at: SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs(),
            progress: Progress { current: progress_cur, maximum: progress_max },
            tags: vec![Tag::new("Works".into(), Color::new(204, 0, 204))],
        }
    }
}

impl Folder {
    pub fn new() -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title: "".into(),
            list: Vec::new(),
        }
    }

    pub fn test(title: String) -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title,
            list: vec![
                Item::Note(Note::test("Chainik".into(), 0, 0)),
                Item::Folder(Folder::test_wihout_folder("Popa".into())),
                Item::Note(Note::test("Chair".into(), 2, 3))
            ]
        }
    }

    pub fn test_wihout_folder(title: String) -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            title,
            list: vec![
                Item::Note(Note::test("Not Chainik".into(), 0, 0)),
                Item::Note(Note::test("Not Chair".into(), 2, 3))
            ]
        }
    }
}

#[command]
pub fn get_list(profile: State<Profile>) -> Vec<Item> {
    profile.list.lock().unwrap().clone()
}

#[command]
pub fn add_note(profile: State<Profile>) {
    profile.list.lock().unwrap().push(Item::Note(Note::new()));
}

#[command]
pub fn edit_note(profile: State<Profile>) {

}

fn find_note_in_list(list: &Vec<Item>, id: &String) -> Result<Note, String> {
    for item in list {
        match item {
            Item::Folder(folder) => {
                match find_note_in_list(&folder.list, id) {
                    Ok(result) => return Ok(result),
                    _ => ()
                }
            },
            Item::Note(note) => {
                if &note.id == id {
                    return Ok(note.clone());
                }
            }
        }
    }
    
    Err("Not found".into())
}

#[command]
pub fn find_note(profile: State<Profile>, id: String) -> Result<Note, String> {
    match find_note_in_list(&profile.list.lock().unwrap(), &id) {
        Ok(result) => Ok(result),
        Err(error) => Err(error)
    }
}

#[command]
pub fn add_folder(profile: State<Profile>) {
    profile.list.lock().unwrap().push(Item::Folder(Folder::new()))
}
