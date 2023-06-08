import styled from "styled-components";
import { ReactComponent as LeftArrowIcon } from "./images/arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "./images/arrow-right.svg";

export const StyledDetailsPagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
`;

export const LeftArrow = styled(LeftArrowIcon)``;

export const RightArrow = styled(RightArrowIcon)``;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.pattensBlue};
  color: ${({ theme }) => theme.color.scienceBlue};
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    pointer-events: none;

    svg {
      color: ${({ theme }) => theme.color.waterloo};
    }
  }

  &:hover ${LeftArrow} {
    transform: translateX(-2px);
  }

  &:hover ${RightArrow} {
    transform: translateX(2px);
  }

  svg {
    display: block;
    transition: transform 120ms ease-in-out;
  }
`;

export const Info = styled.p`
  display: flex;
  gap: 8px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Number = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
