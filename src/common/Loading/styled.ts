import styled, { keyframes } from "styled-components";

import { ReactComponent as svgSpinner } from "./images/spinner.svg";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

const rotate = keyframes`
  from {
      transform: rotate(0deg);
    }

  to {
      transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled(svgSpinner)`
  width: 91px;
  height: 91px;
  color: ${({ theme }) => theme.color.woodsmoke};
  animation: ${rotate} 1s linear infinite;
`;
