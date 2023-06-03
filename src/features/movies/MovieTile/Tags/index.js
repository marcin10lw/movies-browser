import { StyledTags, Tag } from "./styled";
import { selectGenreByIds } from "../../genresSlice";
import { useSelector } from "react-redux";

const Tags = ({ genreIds }) => {
  const genres = useSelector((state) => selectGenreByIds(state, genreIds));

  return (
    <StyledTags>
      {genres.map(({ id, name }) => (
        <Tag key={id}>{name}</Tag>
      ))}
    </StyledTags>
  );
};

export default Tags;
