import { HeaderButtons, HeaderSection, HeaderTitle } from "./style";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderButtons>{"<- ->"}</HeaderButtons>
      <HeaderTitle>works/new-doc</HeaderTitle>
      <HeaderButtons>=</HeaderButtons>
    </HeaderSection>
  );
}

export default Header;
