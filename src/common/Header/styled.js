import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as VideoIcon } from "./images/VideoIcon.svg";
import { ReactComponent as SearchIcon } from "./images/SearchIcon.svg";
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.color.black};
  padding: 23px 16px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${bpMobile}px) {
    padding: 16px;
    background: ${({ theme }) => theme.color.black};
  }

  ${({ isBlackBackground }) =>
    isBlackBackground &&
    css`
      background: ${({ theme }) => theme.color.black};
    `}
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${bpMobile}px) {
    gap: 8px;
  }
`;

export const GridWrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${bpMobile}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${bpMobile}px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  flex-shrink: 0;

  @media (max-width: ${bpMobile}px) {
    width: 17px;
    height: 17px;
  }
`;

export const TitleText = styled.div`
  font-weight: 500;
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 13px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 16px;

  @media (max-width: ${bpMobile}px) {
    gap: 12px;
    margin-left: 30px;
  }
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.color.white};
  background: none;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  text-decoration: none;

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${bpMobile}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  @media (max-width: ${bpMobile}px) {
    width: 16px;
  }
`;

export const SearchBarIcon = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  background-color: ${({ theme }) => theme.color.white};
  height: 48px;
  width: 50px;
  border-radius: 33px 0 0 33px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: -0.7px;

  @media (max-width: ${bpMobile}px) {
    height: 44px;
    width: 35px;
  }
`;

export const SearchBarInput = styled.input`
  height: 48px;
  width: 100%;
  padding: 19px;
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-left: none;
  border-radius: 0 33px 33px 0;

  &::placeholder {
    color: ${({ theme }) => theme.color.waterloo};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${bpMobile}px) {
    height: 44px;
    width: 288px;
    width: 100%;
    padding: 10px;

    &::placeholder {
      font-size: 13px;
    }
  }
`;
