import Rates from "./Rates";
import { MovieInfo, Poster, StyledTile, Subtitle, Title, Dummy } from "./styled";
import Tags from "./Tags";


export const Tile = ({ poster, title, subtitle, rate, votes }) => {

    return (
        <>
            <StyledTile>
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
            </StyledTile>

        </>
    );
}