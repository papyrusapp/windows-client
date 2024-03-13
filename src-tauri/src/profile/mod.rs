use self::list::{Item, Note, Folder};

pub mod list;

#[derive(Debug)]
pub struct Profile {
    list: Vec<Item>,
}

impl Profile {
    pub fn new() -> Self {
        Self {
            list: vec![
                Item::Note(Note::new(1, "Piska".into(), 2, 3)),
                Item::Note(Note::new(2, "Mama".into(), 0, 0)),
                Item::Note(Note::new(3, "Danik".into(), 1, 6)),
                Item::Folder(Folder::new(4, "Folder".into()))
            ],
        }
    }
}
