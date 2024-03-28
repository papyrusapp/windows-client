use self::list::{Folder, Item, Note};
use std::{fs::File, io::ErrorKind, sync::Mutex};

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

pub struct Save;

impl Save {
    pub fn init() {
        let save = File::open("save.data");

        let _ = match save {
            Ok(file) => file,
            Err(error) => match error.kind() {
                ErrorKind::NotFound => match File::create("sava.data") {
                    Ok(file) => file,
                    Err(error) => panic!("Problem creating the file: {:?}", error),
                },
                other_error => {
                    panic!("Problem opening the file: {:?}", other_error);
                }
            },
        };
    }
}
