import styled from "styled-components";

export const HeaderSection = styled.div`
  background-color: ${(props) => props.theme.colors.black60};
  border-bottom: 1px solid ${(props) => props.theme.colors.black70};
`;

export const HeaderContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

export const HeaderTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderViewButton = styled.button<{ $active?: boolean }>`
  padding: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  path {
    fill: ${(props) =>
      props.$active ? props.theme.colors.white : props.theme.colors.gray50};
  }
`;
