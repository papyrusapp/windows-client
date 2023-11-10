import styled from "styled-components";
import Link from "next/link";

export const HeaderSection = styled.div`
  position: absolute;
  top: 31px;
  width: calc(100% - 200px);
  border-bottom: 1px solid #424242;
`;

export const HeaderContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

export const HeaderTitle = styled.h2`
  position: absolute;
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  left: 50%;
  transform: translateX(-50%)
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
`;

export const HeaderViewButton = styled(Link)`
  display: flex;
  align-items: center;
`;
