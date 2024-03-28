import { TitleButton } from "../style";
import { MenuItemType } from "../navigation";
import DropDownMenu from "./dropDownMenu";
import { Dispatch, SetStateAction } from "react";

interface Props {
  item: MenuItemType;
  index: number;
  isActive: boolean;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  onMenuClick: (index: number) => void;
}

const MenuItem = ({
  item,
  index,
  isActive,
  activeIndex,
  setActiveIndex,
  onMenuClick,
}: Props) => {
  return (
    <TitleButton
      key={index}
      onClick={() => onMenuClick(index)}
      onMouseEnter={() => activeIndex !== -1 && onMenuClick(index)}
      {...(isActive && { $active: true })}
    >
      {item.name}
      <DropDownMenu
        list={item.list}
        isActive={isActive}
        setActiveIndex={setActiveIndex}
      />
    </TitleButton>
  );
};

export default MenuItem;
