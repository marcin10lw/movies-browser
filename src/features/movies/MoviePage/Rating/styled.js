import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./images/StarIcon.svg";

export const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 7px;
  }

  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-direction: row;
        align-items: center;
      }
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 16px;
    height: 16px;
  }

  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      width: 40px;
    `}
`;

export const Votes = styled.span`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-weight: 600;
    font-size: 13px;
  }

  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      font-size: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
      }
    `}
`;

export const VoteAmount = styled.span`
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.stormGrey};
  }

  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      font-size: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        color: ${({ theme }) => theme.color.white};
        font-size: 10px;
      }
    `}
`;

export const MaxVote = styled.span`
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }

  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        visibility: visible;
      }
    `}
`;
