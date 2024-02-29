"use client";

import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    black100: "#0A0A0A",
    black90: "#0D0D0D",
    black80: "#0F0F0F",
    black70: "#121212",
    black60: "#141414",
    black50: "#161616",
    gray100: "#222222",
    gray50: "#808080",
    white: "#FFFFFF",
    red: "#FF5E5E",
  },
};

export default createGlobalStyle`
  body {
    margin: 0px 100px 0px 0px;
    background-color: ${theme.colors.black50};
    width: 100vw;
    height: 100vh;
  }
`;

export const Resizer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -6px;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  flex-shrink: 0;
  transform: translateX(-50%);
`;
