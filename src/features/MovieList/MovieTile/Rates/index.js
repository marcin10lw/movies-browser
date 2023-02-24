
import { StyledRates, Votes, StyledStar, Score } from "./styled";
// i know ther can be a empty rating but i fixed it latter ( idt how its look's as empty)
const Rates = ({ score = "7,8", votes = "35" }) => (
    <StyledRates>
        <StyledStar />
        <Score>{score}</Score>
        <Votes>{votes} vote{votes === "1" ? "" : "s"}</Votes>
    </StyledRates>
);

export default Rates;