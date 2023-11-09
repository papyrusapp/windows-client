import styled from "styled-components";

export const HeaderSection = styled.div`
  position: absolute;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
  top: 31px;
  width: calc(100% - 20px);
  height: 25px;
  border-bottom: 1px solid #424242;
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
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
`;
