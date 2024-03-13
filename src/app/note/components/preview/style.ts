import styled from "styled-components";

export const PreviewWindow = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 12px;
  background-color: transparent;
  flex-grow: 1;
  inline-size: min-content;
  line-break: anywhere;
  word-wrap: break-word;
  word-break: normal;

  :first-child {
    margin-top: 0px;
  }

  h1,
  h2 {
    border-color: ${(props) => props.theme.colors.white};
  }

  pre {
    background-color: ${(props) => props.theme.colors.black70};
  }
`;
