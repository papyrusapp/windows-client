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
  padding: 10px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.black100};
`;

export const SearchInput = styled.input`
  background-color: transparent;
  font-size: 13px;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  border: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }

  &:focus {
    outline: none;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 0px;
`;
