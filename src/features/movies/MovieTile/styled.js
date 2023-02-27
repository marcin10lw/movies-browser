import { Link } from "react-router-dom";
import styled from "styled-components";
import posterImage from "./images/video.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledMovieTile = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  height: 100%;

  @media (max-width: ${bpMobile}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: ${bpMobile}px) {
    display: block;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: ${bpMobile}px) {
    width: 114px;
    height: 169px;
    flex-shrink: 0;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  @media (max-width: ${bpMobile}px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  margin: 8px 0 0 0;
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: ${bpMobile}px) {
    font-size: 13px;
    line-height: 130%;
    margin: 4px 0 0 0;
  }
`;

export const Dummy = styled.div`
  width: 292px;
  height: 434px;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  object-fit: cover;
  background-image: url(${posterImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28%;

  @media (max-width: ${bpMobile}px) {
    width: 114px;
    height: 169px;
    background-size: auto;
    flex-shrink: 0;
  }
`;
