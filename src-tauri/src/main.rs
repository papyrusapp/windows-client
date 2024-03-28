#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{generate_context, generate_handler, Manager};
use window_shadows::set_shadow;

mod data;
use data::{
    get_items,
    items::{create_directory, create_note, read_note, write_note},
    Data,
};

fn main() {
    Data::initialization();
    println!("{:#?}", Data::read());

    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            set_shadow(&window, true).unwrap();
            Ok(())
        })
        .invoke_handler(generate_handler![
            get_items,
            create_note,
            read_note,
            write_note,
            create_directory
        ])
        .run(generate_context!())
        .expect("error while running tauri application");
}
