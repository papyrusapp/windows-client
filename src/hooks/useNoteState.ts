import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";

const useNoteState = (
  get_command: string,
  set_command: string,
  id: string,
): [string, any] => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    (async function () {
      try {
        const result = await invoke<string>(get_command, { id });
        setState(result);
      } catch (error) {
        console.error("Error fetching data from Tauri:", error);
      }
    })();
  }, [state, get_command]);

  const setTauriState = async (newValue: string) => {
    try {
      const result = await invoke<string>(set_command, {
        id,
        content: newValue,
      });
      setState(result);
    } catch (error) {
      console.error("Error setting data in Tauri:", error);
    }
  };

  return [state, setTauriState];
};

export default useNoteState;
