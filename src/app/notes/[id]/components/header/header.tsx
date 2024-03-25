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
import { Dispatch, SetStateAction } from "react";

interface Props {
  mode: ViewMode;
  setMode: Dispatch<SetStateAction<ViewMode>>;
  setWidth: Dispatch<SetStateAction<number>>;
}

const Header = (props: Props) => {
  const { mode, setMode, setWidth } = props;

  const click = () => {
    setMode(ViewMode.Middle);
    setWidth(50);
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderButtons>{"<- ->"}</HeaderButtons>
        <HeaderTitle>works/new-doc</HeaderTitle>
        <HeaderButtons>
          <HeaderViewButton
            {...(mode === ViewMode.Middle && { $active: true })}
            onClick={() => click()}
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
