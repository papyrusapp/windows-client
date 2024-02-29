import {
  HeaderButtons,
  HeaderViewButton,
  HeaderSection,
  HeaderTitle,
  HeaderContainer,
} from "./style";
import { ViewMode } from "../../types";
import ViewButtons from "./components/viewButtons";
import { SplitIcon } from "@/app/styles/icons";

interface Props {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
}

const Header = (props: Props) => {
  const { mode, setMode } = props;

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderButtons>{"<- ->"}</HeaderButtons>
        <HeaderTitle>works/new-doc</HeaderTitle>
        <HeaderButtons>
          <HeaderViewButton
            href="#"
            {...(mode === ViewMode.Middle && { $active: true })}
            onClick={() => setMode(ViewMode.Middle)}
          >
            <SplitIcon />
          </HeaderViewButton>
          <ViewButtons setMode={setMode} mode={mode} />
        </HeaderButtons>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
