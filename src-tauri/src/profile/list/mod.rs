use super::Profile;
use serde::Serialize;
use tauri::{command, State};

#[derive(Clone, Debug, Serialize)]
struct Tag {
    id: usize,
    title: String,
    color: String,
}

#[derive(Clone, Debug, Serialize)]
struct Progress {
    current: u32,
    maximum: u32,
}

#[derive(Clone, Debug, Serialize)]
pub struct Note {
    id: usize,
    kind: bool,
    title: String,
    content: String,
    created_at: usize,
    updated_at: usize,
    progress: Progress,
    tags: Vec<Tag>,
}

#[derive(Clone, Debug, Serialize)]
pub struct Folder {
    id: usize,
    kind: bool,
    title: String,
    list: Vec<Item>
}

#[derive(Clone, Debug, Serialize)]
pub enum Item {
    Folder(Folder),
    Note(Note)
}

impl Note {
    pub fn new(id: usize, content: String, progress_cur: u32, progress_max: u32) -> Self {
        Self {
            id,
            kind: true,
            title: content.clone(),
            content,
            created_at: 0,
            updated_at: 0,
            progress: Progress {
                current: progress_cur,
                maximum: progress_max,
            },
            tags: Vec::new(),
        }
    }
}

impl Folder {
    pub fn new(id: usize, title: String) -> Self {
        Self {
            id,
            kind: false,
            title,
            list: vec![
                Item::Note(Note::new(5, "qq".into(), 3, 4)),
                Item::Note(Note::new(6, "Piska".into(), 2, 2)),
            ]
        }
    }
}

#[command]
pub fn get_list(profile: State<Profile>) -> Vec<Item> {
    profile.list.clone()
}
