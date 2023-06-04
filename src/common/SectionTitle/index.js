import styled, { css } from "styled-components";

export const SectionTitle = styled.h1`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 0 12px 0;
    max-width: 1368px;
    font-size: 18px;
  }

  ${({ detailsPage }) =>
    detailsPage &&
    css`
      margin: 64px 0 24px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 24px 0 16px;
      }
    `}
`;