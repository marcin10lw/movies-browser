import { selectGenreByIds } from "../../genresSlice";
import { useSelector } from "react-redux";

import { GenreIds } from "../../../../common/types";
import { RootState } from "../../../../store";
import { StyledTags, Tag } from "./styled";

type TagsProps = {
  genreIds: GenreIds;
};

const Tags = ({ genreIds }: TagsProps) => {
  const genres = useSelector((state: RootState) =>
    selectGenreByIds(state, genreIds)
  );

  return (
    <StyledTags>
      {genres.map(({ id, name }) => (
        <Tag key={id}>{name}</Tag>
      ))}
    </StyledTags>
  );
};

export default Tags;
