import { EyeIcon, PencilIcon } from "@/app/styles/icons";
import { ViewMode } from "../../../types";
import { HeaderViewButton } from "../style";
import { Dispatch, SetStateAction } from "react";

interface Props {
  mode: ViewMode;
  setMode: Dispatch<SetStateAction<ViewMode>>;
}

const ViewButtons = (props: Props) => {
  const { mode, setMode } = props;

  if (mode === ViewMode.Edit || mode === ViewMode.Middle) {
    return (
      <HeaderViewButton
        {...(mode === ViewMode.Edit && { $active: true })}
        onClick={() => setMode(ViewMode.Preview)}
      >
        <EyeIcon />
      </HeaderViewButton>
    );
  } else if (mode === ViewMode.Preview) {
    return (
      <HeaderViewButton onClick={() => setMode(ViewMode.Edit)}>
        <PencilIcon />
      </HeaderViewButton>
    );
  }
};

export default ViewButtons;
