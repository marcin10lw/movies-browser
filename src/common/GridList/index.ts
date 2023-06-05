import styled, { css } from "styled-components";

type GridListProps = {
  popularPeople?: boolean;
  popularMovies?: boolean;
};

export const GridList = styled.ul<GridListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  justify-content: center;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 16px;
  }

  ${({ popularPeople }) =>
    popularPeople &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
      }
    `}

  ${({ popularMovies }) =>
    popularMovies &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      }
    `}
`;
