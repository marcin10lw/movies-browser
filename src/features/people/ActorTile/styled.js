import styled from "styled-components";
import { Link } from "react-router-dom";
import dummyActorImage from "./images/dummyIcon.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledActorTile = styled(Link)`
  display: block;
  height: 339px;
  width: 208px;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${bpMobile}px) {
    height: 245px;
    width: 136px;
    padding: 8px;
  }
`;

export const ActorImage = styled.img`
  height: 231px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${bpMobile}px) {
    height: 178px;
  }
`;

export const ActorName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.color.woodsmoke};

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

export const DummyActor = styled.div`
  height: 231px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${dummyActorImage});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${bpMobile}px) {
    height: 178px;
  }
`;