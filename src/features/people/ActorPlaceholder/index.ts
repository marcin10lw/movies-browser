import styled from "styled-components";

import dummyActorImage from "./images/dummyIcon.svg";

export const ActorPlaceholder = styled.div`
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${dummyActorImage});
  background-repeat: no-repeat;
  background-position: center;
  grid-area: 1 / 1 / 4 / 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }
`;
