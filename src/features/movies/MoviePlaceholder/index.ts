import styled from "styled-components";

import posterImage from "./images/dummyIcon.svg";

export const MoviePlaceholder = styled.div`
  max-height: 750px;
  max-width: 500px;
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  object-fit: cover;
  background-image: url(${posterImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28%;
  grid-area: p;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 114px;
    background-size: auto;
    flex-shrink: 0;
  }
`;
