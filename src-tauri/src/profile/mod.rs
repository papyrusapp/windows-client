use std::sync::Mutex;
use self::list::{Item, Note, Folder};

pub mod list;

#[derive(Debug)]
pub struct Profile {
    list: Mutex<Vec<Item>>,
}

impl Profile {
    pub fn new() -> Self {
        Self {
            list: Mutex::new(vec![
                Item::Note(Note::test("School".into(), 3, 10)),
                Item::Folder(Folder::test("Home".into())),
                Item::Note(Note::test("Shop".into(), 0, 0)),
                Item::Note(Note::test("Coding".into(), 3, 5)),
            ]),
        }
    }
}
