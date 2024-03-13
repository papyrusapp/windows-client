import styled from "styled-components";

export const NoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  border-radius: 4px;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.colors.black90};
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressBlock = styled.div`
  display: flex;
  width: 50px;
  height: 4px;
  padding: 0px 1px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.black50};
`;

export const ProgressLine = styled.div.attrs<{ $width: number }>((props) => ({
  style: {
    width: `${props.$width}%`,
  },
}))`
  height: 2px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
`;
