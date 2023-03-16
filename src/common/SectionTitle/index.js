import styled, { css } from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const SectionTitle = styled.h1`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${bpMobile}px) {
    margin: 0 0 12px 0;
    max-width: 1368px;
    font-size: 18px;
  }

  ${({ location }) =>
    location === "detailsPage" &&
    css`
      margin: 64px 0 24px;

      @media (max-width: ${bpMobile}px) {
        margin: 24px 0 16px;
      }
    `}
`;
