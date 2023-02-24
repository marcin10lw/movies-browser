import styled from "styled-components";


export const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
`;

export const Tag = styled.span`
    padding: 8px 16px;
    background: #E4E6F0;
    border-radius: 5px;
    color: #18181B;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 4px 8px;
        font-size: 10px;
        line-height: 110%;
    }     
`;