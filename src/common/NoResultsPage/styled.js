import styled from "styled-components";
import { ReactComponent as NoResultsImage } from "./images/NoResultsImage.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledNoResultsImage = styled(NoResultsImage)`
    display: block;
    margin: 0 auto;
    
  @media (max-width: ${bpMobile}px) {
    width: 60%;
    height: 60%;
  }
`;
