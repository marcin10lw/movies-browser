import styled from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: minmax(116px, 399px) auto;
  grid-template-areas:
    "i h"
    "i b"
    "i p";
  padding: 40px;
  column-gap: 40px;

  @media (max-width: ${bpMobile}px) {
    column-gap: normal;
    gap: 16px;
    padding: 16px;
  }
`;

export const ActorImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  grid-area: 1 / 1 / 4 / 2;

  @media (max-width: ${bpMobile}px) {
    grid-row: 1 / 2;
  }
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
    margin: 0 0 16px;
  }
`;

export const BirthInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 24px;
  font-size: 18px;
  grid-area: b;

  @media (max-width: ${bpMobile}px) {
    font-size: 12px;
    margin: 0 0 4px;
  }
`;

export const SpecificInfo = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.stormGrey};
  margin: 0 10px 0 0;

  &::first-letter {
    text-transform: capitalize;
  }

  @media (max-width: ${bpMobile}px) {
    margin: 0 4px 0 0;
  }
`;

export const OptionalInfo = styled.span`
  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const ActorBio = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  grid-area: b;

  @media (max-width: ${bpMobile}px) {
    grid-area: 2 / 1 / 4 / 3;
    font-size: 14px;
  }
`;
