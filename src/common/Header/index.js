import { useState } from "react";
import { NavLink } from 'react-router-dom';
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
                        <NavLink to="/movies">
                            <HeaderButton>MOVIES</HeaderButton>
                        </NavLink>
                        <NavLink to="/people">
                            <HeaderButton>PEOPLE</HeaderButton>
                        </NavLink>
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