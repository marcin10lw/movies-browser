import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { MoviePlaceholder } from "../MoviePlaceholder";

export const StyledMovieTile = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  height: 100%;
  transition: box-shadow 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95),
    transform 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px 5px #a1bae2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: row;
    align-items: center;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: block;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 2 / 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: 114px;
    flex-shrink: 0;
  }

  ${({ loaded }) =>
    !loaded &&
    css`
      display: none;
    `}
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  margin: 8px 0 0 0;
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    line-height: 130%;
    margin: 4px 0 0 0;
  }
`;

export const MoviesStandbyWrapper = styled.div`
  ${({ loaded }) =>
    loaded &&
    css`
      display: none;
    `}
`;

export const MovieStandbyPoster = styled(MoviePlaceholder)`
  background-color: transparent;
  background: none;
`;
