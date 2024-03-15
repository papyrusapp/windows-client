#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{generate_context, generate_handler, Manager};
use window_shadows::set_shadow;

mod profile;
use profile::{list::{get_list, add_note, add_folder}, Profile};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            set_shadow(&window, true).unwrap();

            Ok(())
        })
        .manage(Profile::new())
        .invoke_handler(generate_handler![get_list, add_note, add_folder])
        .run(generate_context!())
        .expect("error while running tauri application");
}
