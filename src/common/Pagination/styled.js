import styled, { css } from "styled-components";
import { ReactComponent as LeftArrowIcon } from "./images/arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "./images/arrow-right.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledPagination = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 0 0 103px;

  @media (max-width: ${bpMobile}px) {
    gap: 8px;
  }

  ${({ location }) =>
    location === "popularMovies" &&
    css`
      margin: 40px 0 63px;

      @media (max-width: ${bpMobile}px) {
        margin: 32px 0 0;
      }
    `}

  ${({ location }) =>
    location === "popularPeople" &&
    css`
      margin: 56px 0 83px;

      @media (max-width: ${bpMobile}px) {
        margin: 50px 0 9px;
      }
    `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${bpMobile}px) {
    gap: 8px;
  }
`;

export const LeftArrow = styled(LeftArrowIcon)`
  color: ${({ theme }) => theme.color.scienceBlue};
  transition: transform 120ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${bpMobile}px) {
    width: 5px;
    height: 8px;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${bpMobile}px) {
        display: block;
      }
    `}
`;

export const RightArrow = styled(RightArrowIcon)`
  color: ${({ theme }) => theme.color.scienceBlue};
  transition: transform 120ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${bpMobile}px) {
    width: 5px;
    height: 8px;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${bpMobile}px) {
        display: block;
      }
    `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.mineShaft};
  background-color: ${({ theme }) => theme.color.pattensBlue};
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: auto;
    opacity: 1;
  }

  @media (max-width: ${bpMobile}px) {
    padding: 7.5px 12px;
    gap: 4px;
  }

  &:hover ${LeftArrow} {
    transform: translateX(-2px);
  }

  &:disabled ${LeftArrow} {
    transform: none;
    color: ${({ theme }) => theme.color.waterloo};
  }

  &:hover ${RightArrow} {
    transform: translateX(2px);
  }

  &:disabled ${RightArrow} {
    transform: none;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const PageInfo = styled.div`
  font-size: 16px;
  display: flex;
  gap: 8px;

  @media (max-width: ${bpMobile}px) {
    font-size: 10px;
    gap: 2px;
  }
`;

export const InfoText = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const InfoNumber = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
