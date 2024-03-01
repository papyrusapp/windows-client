import styled from "styled-components";

export const NoteBlock = styled.div`
  display: flex;
  padding: 5px 8px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.black90};
  }
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div``;
