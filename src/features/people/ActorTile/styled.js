import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { DummyActor } from "../DummyActor";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledActorTile = styled(Link)`
  display: block;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.white};
  transition: all 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 18px 2px #c2d7ff;
  }

  @media (max-width: ${bpMobile}px) {
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

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

export const Role = styled.div`
  font-size: 18px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${bpMobile}px) {
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

export const ActorStandbyPoster = styled(DummyActor)`
  background-color: transparent;
  background: none;
`;
