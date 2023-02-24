import { useState } from "react";
import {
    StyledHeader,
    GridWrapper,
    Wrapper,
    StyledVideoIcon,
    TitleWrapper,
    TitleText,
    HeaderButton,
    StyledSearchIcon,
    SearchBar,
    SearchBarIcon,
    SearchBarInput,
    ButtonsWrapper,
    StyledNavLink,
} from "./styled";

const Header = () => {
    const [input, setInput] = useState();

    const onInputChange = ({ target }) => setInput(target.value);

    return (
        <StyledHeader>
            <GridWrapper>
                <Wrapper>
                    <TitleWrapper>
                        <StyledVideoIcon />
                        <TitleText>Movies Browser</TitleText>
                    </TitleWrapper>
                    <ButtonsWrapper>
                        <StyledNavLink to="/movies">
                            <HeaderButton>MOVIES</HeaderButton>
                        </StyledNavLink>
                        <StyledNavLink to="/people">
                            <HeaderButton>PEOPLE</HeaderButton>
                        </StyledNavLink>
                    </ButtonsWrapper>
                </Wrapper>
                <SearchBar>
                    <SearchBarIcon>
                        <StyledSearchIcon />
                    </SearchBarIcon>
                    <SearchBarInput
                        placeholder="Search for movies..."
                        value={input}
                        onChange={onInputChange}
                    />
                </SearchBar>
            </GridWrapper>
        </StyledHeader>
    );
};

export default Header;