import styled from "styled-components";
import { ReactComponent as NoResultsImage } from "./images/NoResultsImage.svg";

export const StyledNoResultsImage = styled(NoResultsImage)`
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 60%;
    height: 60%;
  }
`;
