"use client";

import Link from "next/link";
import styled from "styled-components";

export const App = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;
  color: ${(props) => props.theme.colors.white};
`;

export const NotFoundInfo = styled.div`
  display: flex;
  gap: 36px;
`;

export const NotFoundButton = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black70};
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.colors.black80};
  }
`;
