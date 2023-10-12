import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as ErrorIcon } from "./images/ErrorIcon.svg";

export const StyledErrorPage = styled.div`
  display: grid;
  justify-items: center;
  gap: 38px;
  margin-top: 195px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 14px;
    margin-top: 65px;
  }
`;

export const StyledErrorImage = styled(ErrorIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 80px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 16px;
  }
`;

export const ErrorText = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  text-align: center;
  max-width: 426px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const Button = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  font-family: "Open Sans";
  padding: 16px 24px;
  line-height: 19px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
    padding: 12px 16px;
  }
`;
