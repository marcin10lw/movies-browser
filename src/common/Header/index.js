import { useLocation, useSearchParams } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import {
  StyledHeader,
  GridWrapper,
  Wrapper,
  StyledVideoIcon,
  TitleWrapper,
  TitleText,
  StyledNavLink,
  StyledSearchIcon,
  SearchBar,
  SearchBarIcon,
  SearchBarInput,
  ButtonsWrapper,
} from "./styled";

const Header = () => {
  const { pathname } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams({
    [searchQueryParamName]: "",
  });

  const query = searchParams.get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
      setSearchParams(searchParams);
    } else {
      setSearchParams({ [searchQueryParamName]: target.value });
    }
  };

  const isBlackBackground = pathname !== "/movies" && pathname !== "/people";

  return (
    <StyledHeader>
      <GridWrapper>
        <Wrapper>
          <TitleWrapper>
            <StyledVideoIcon />
            <TitleText>Movies Browser</TitleText>
          </TitleWrapper>
          <ButtonsWrapper>
            <StyledNavLink to="/movies">MOVIES</StyledNavLink>
            <StyledNavLink to="/people">PEOPLE</StyledNavLink>
          </ButtonsWrapper>
        </Wrapper>
        <SearchBar>
          <SearchBarIcon>
            <StyledSearchIcon />
          </SearchBarIcon>
          <SearchBarInput
            placeholder={
              pathname.includes("people")
                ? "Search for people..."
                : "Search for movies..."
            }
            value={query || ""}
            onChange={onInputChange}
          />
        </SearchBar>
      </GridWrapper>
    </StyledHeader>
  );
};

export default Header;
