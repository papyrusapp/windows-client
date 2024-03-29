import { Dispatch, SetStateAction } from "react";
import { DropDownItemType } from "../navigation";
import { TitleDropDownItem, TitleDropDownMenu } from "../style";
import { invoke } from "@tauri-apps/api/tauri";

interface Props {
  list: DropDownItemType[];
  isActive: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const DropDownMenu = ({ list, isActive, setActiveIndex }: Props) => {
  const disable = () => {
    invoke<void>("create_note").catch(console.error);
    setActiveIndex(-1);
  };

  if (isActive) {
    return (
      <TitleDropDownMenu>
        {list.map((item: DropDownItemType, index: number) => (
          <TitleDropDownItem
            key={index}
            href={item.href}
            onClick={() => disable()}
          >
            <span>{item.name}</span>
            <span>{item.hotkey}</span>
          </TitleDropDownItem>
        ))}
      </TitleDropDownMenu>
    );
  }
};

export default DropDownMenu;
