import { useState } from "react";
import { MenuContainer, MenuSection } from "./style";

interface Notes {
  id: number,
  name: string,
  description: string
}

const Menu = () => {
  // const [notes] = useState<Notes>([]);

  return (
    <MenuSection>
      <MenuContainer>
      </MenuContainer>
    </MenuSection>
  );
}

export default Menu;
