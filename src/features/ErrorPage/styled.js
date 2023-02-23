import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg";

export const StyledErrorPage = styled.div`
    display: grid;
    justify-items: center;
    gap: 36px;
    margin-top: 195px;
`;

export const StyledErrorImage = styled(ErrorIcon)`

`;

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    gap: 24px;
`;

export const ErrorText = styled.div`
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const ErrorDescription = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    width: 426px;
`;

export const Button = styled.button`
    font-weight: 700;
    font-size: 14px;
    font-family: 'Open Sans';
    padding: 16px 24px;
    line-height: 19px;
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.color.white};
    background-color: ${({ theme }) => theme.color.scienceBlue};
`;