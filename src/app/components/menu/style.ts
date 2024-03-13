import styled from "styled-components";

export const MenuSection = styled.div.attrs<{ $width: number }>((props) => ({
  style: {
    width: `${props.$width}px`,
  },
}))`
  height: 100%;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.black80};
`;

export const MenuContainer = styled.div`
  padding: 0px 10px;
`;
