import { Main } from "@/app/styles/globalStyles";
import styled from "styled-components";

export const TagBlock = styled.div<{ $color: Color }>`
  background-color: rgba(
    ${(props) => props.$color.red},
    ${(props) => props.$color.green},
    ${(props) => props.$color.blue},
    0.4
  );
  padding: 2px 4px;
  border-radius: 4px;
`;

export const TagTitle = styled(Main)<{ $isDark: boolean }>`
  margin: 0px;
  font-size: 12px;
  color: ${(props) =>
    props.$isDark ? props.theme.colors.black100 : props.theme.colors.white};
`;
