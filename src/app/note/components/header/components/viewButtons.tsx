import { EyeIcon, PencilIcon } from "@/app/styles/icons";
import { ViewMode } from "../../../types";
import { HeaderViewButton } from "../style";

interface Props {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
}

const ViewButtons = (props: Props) => {
  const { mode, setMode } = props;

  if (mode === ViewMode.Edit || mode === ViewMode.Middle) {
    return (
      <HeaderViewButton
        href="#"
        {...(mode === ViewMode.Edit && { $active: true })}
        onClick={() => setMode(ViewMode.Preview)}
      >
        <EyeIcon />
      </HeaderViewButton>
    );
  } else if (mode === ViewMode.Preview) {
    return (
      <HeaderViewButton href="#" onClick={() => setMode(ViewMode.Edit)}>
        <PencilIcon />
      </HeaderViewButton>
    );
  }
};

export default ViewButtons;
