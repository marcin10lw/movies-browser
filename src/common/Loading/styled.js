import styled from "styled-components";
import { ReactComponent as svgSpinner } from "./images/spinner.svg";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;
export const StyledSpinner = styled(svgSpinner)`
  width: 91px;
  height: 91px;
  color: ${({ theme }) => theme.color.woodsmoke};
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
