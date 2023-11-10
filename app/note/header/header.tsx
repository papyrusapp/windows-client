import { HeaderButtons, HeaderViewButton, HeaderSection, HeaderTitle, HeaderContainer } from "./style";
import { ViewMode } from "../types";
import ViewButtons from "./viewButtons";
import { SplitIcon } from "../../icons";

interface Props {
  mode: ViewMode
  setMode: (mode: ViewMode) => void
}

const Header = (props: Props) => {
  const { mode, setMode } = props;

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderButtons>{"<- ->"}</HeaderButtons>
        <HeaderTitle>works/new-doc</HeaderTitle>
        <HeaderButtons>
          <HeaderViewButton href="#" onClick={() => setMode(ViewMode.Middle)}>
            <SplitIcon />
          </HeaderViewButton>
          <ViewButtons setMode={setMode} mode={mode} />
        </HeaderButtons>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
