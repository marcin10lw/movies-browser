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
  NavigationList,
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
          <nav>
            <NavigationList>
              <li>
                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
              </li>
            </NavigationList>
          </nav>
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
