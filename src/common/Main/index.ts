import styled, { css } from "styled-components";

type MainProps = {
  moviePage?: boolean;
};

export const Main = styled.main<MainProps>`
  padding: 56px 16px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 24px 16px 32px;
  }

  ${({ moviePage }) =>
    moviePage &&
    css`
      padding-top: 0;
      padding-bottom: 336px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding-bottom: 88px;
      }
    `}
`;
