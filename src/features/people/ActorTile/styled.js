import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ActorPlaceholder } from "../ActorPlaceholder";

export const StyledActorTile = styled(Link)`
  display: block;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.color.white};
  transition: box-shadow 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95),
    transform 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 18px 2px ${({ theme }) => theme.color.periwinkle};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 8px;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  aspect-ratio: 3 / 4;

  ${({ loaded }) =>
    !loaded &&
    css`
      display: none;
    `}
`;

export const ActorName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

export const Role = styled.div`
  font-size: 18px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    margin: 8px 0 0 0;
  }
`;

export const ActorStandbyWrapper = styled.div`
  ${({ loaded }) =>
    loaded &&
    css`
      display: none;
    `}
`;

export const ActorStandbyPoster = styled(ActorPlaceholder)`
  background-color: transparent;
  background: none;
`;
