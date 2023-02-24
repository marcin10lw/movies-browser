import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const StyledRates = styled.div`
    position: absolute;
    bottom: 0;
    margin: 8px 0 0;
    height: 24px;
    display: flex;
    gap: 12px;
    align-items: stretch;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        position: static;
        gap: 4px;
        font-size: 13px;
        line-height: 130%;
    }
`;

export const Votes = styled.p`
    margin: 0;
    color: #7e839a;
    font-weight: 400;

`;

export const Score = styled.p`
    margin: 0;
    color: #18181b;
    font-weight: 600;

`;

export const StyledStar = styled(Star)`
    width: 24px;
    height: 21px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 16px;
        height: 16px;
    }
`;