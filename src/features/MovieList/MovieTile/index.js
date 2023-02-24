import Rates from "./Rates";
import { MovieInfo, Poster, StyledMovieTile, Subtitle, Title, Dummy } from "./styled";
import Tags from "./Tags";


export const MovieTile = ({ poster, title, subtitle, rate, votes }) => {

    return (
        <>
            <StyledMovieTile>
                <Poster >
                    {poster || <Dummy />}
                </Poster>
                <MovieInfo>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <Tags />
                    <Rates 
                        score={rate}
                        votes={votes}    
                    />
                </MovieInfo>
            </StyledMovieTile>

        </>
    );
}