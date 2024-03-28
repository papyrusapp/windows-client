use bincode::{deserialize, serialize};
use lazy_static::lazy_static;
use std::{
    env,
    fs::{create_dir, metadata, File},
    io::{BufRead, BufReader, ErrorKind, Write},
    sync::Mutex,
};
use tauri::command;

pub mod items;
use items::Item;

const DATA_NAME: &str = "data";
const DATA_DIRECTORY_NAME: &str = "data-bin";
const LOCAL_DIRECTORY_NAME: &str = "scribble-data";

lazy_static! {
    #[derive(Debug)]
    static ref LOCAL_DIRECTORY: Mutex<String> = Mutex::new(env::var("LOCALAPPDATA").unwrap());
}

pub struct Data;

impl Data {
    pub fn initialization() {
        match metadata(format!(
            "{}/{}",
            &LOCAL_DIRECTORY.lock().unwrap(),
            LOCAL_DIRECTORY_NAME
        ))
        .is_ok()
        {
            true => Self::data_folder_initialization(),
            false => match create_dir(format!(
                "{}/{}",
                &LOCAL_DIRECTORY.lock().unwrap(),
                LOCAL_DIRECTORY_NAME
            )) {
                Ok(_) => Self::data_folder_initialization(),
                Err(error) => panic!("Problem creating the directory: {:?}", error),
            },
        }
    }

    fn data_folder_initialization() {
        match metadata(format!(
            "{}/{}/{}",
            &LOCAL_DIRECTORY.lock().unwrap(),
            LOCAL_DIRECTORY_NAME,
            DATA_DIRECTORY_NAME
        ))
        .is_ok()
        {
            true => Self::data_file_initialization(),
            false => match create_dir(format!(
                "{}/{}/{}",
                &LOCAL_DIRECTORY.lock().unwrap(),
                LOCAL_DIRECTORY_NAME,
                DATA_DIRECTORY_NAME
            )) {
                Ok(_) => Self::data_file_initialization(),
                Err(error) => panic!("Problem creating the directory: {:?}", error),
            },
        }
    }

    fn data_file_initialization() {
        match File::open(format!(
            "{}/{}/{}/{}",
            &LOCAL_DIRECTORY.lock().unwrap(),
            LOCAL_DIRECTORY_NAME,
            DATA_DIRECTORY_NAME,
            DATA_NAME
        )) {
            Ok(_) => println!("File exist"),
            Err(error) => match error.kind() {
                ErrorKind::NotFound => {
                    match File::create(format!(
                        "{}/{}/{}/{}",
                        &LOCAL_DIRECTORY.lock().unwrap(),
                        LOCAL_DIRECTORY_NAME,
                        DATA_DIRECTORY_NAME,
                        DATA_NAME
                    )) {
                        Ok(mut file) => {
                            let data: Vec<Item> = Vec::new();
                            let serialized_data = serialize(&data).unwrap();
                            let buf = serialized_data.as_slice();

                            file.write_all(buf).unwrap();
                        }
                        Err(error) => panic!("Problem creating the file: {:?}", error),
                    }
                }
                other_error => {
                    panic!("Problem opening the file: {:?}", other_error);
                }
            },
        }
    }

    pub fn write(data: Vec<Item>) {
        let mut file = File::options()
            .write(true)
            .open(format!(
                "{}/{}/{}/{}",
                &LOCAL_DIRECTORY.lock().unwrap(),
                LOCAL_DIRECTORY_NAME,
                DATA_DIRECTORY_NAME,
                DATA_NAME
            ))
            .expect("File not found");
        let serialized_data = serialize(&data).unwrap();
        let buf = serialized_data.as_slice();

        file.write_all(buf).unwrap();
    }

    pub fn read() -> Vec<Item> {
        let file = File::open(format!(
            "{}/{}/{}/{}",
            &LOCAL_DIRECTORY.lock().unwrap(),
            LOCAL_DIRECTORY_NAME,
            DATA_DIRECTORY_NAME,
            DATA_NAME
        ))
        .expect("File not found");
        let mut reader = BufReader::new(file);
        let buf = reader.fill_buf().unwrap();
        let data: Vec<Item> = deserialize(buf).unwrap();

        data
    }
}

#[command]
pub fn get_items() -> Vec<Item> {
    Data::read()
}
