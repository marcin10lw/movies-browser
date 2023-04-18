import { useState } from "react";
import { ActorPlaceholder } from "../ActorPlaceholder";
import {
  StyledActorTile,
  ActorImage,
  ActorName,
  Role,
  ActorStandbyWrapper,
  ActorStandbyPoster,
} from "./styled";

const ActorTile = ({ poster, name, role, id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledActorTile to={`/people/${id}`}>
      {poster ? (
        <>
          <ActorStandbyWrapper loaded={imageLoaded}>
            <ActorStandbyPoster />
          </ActorStandbyWrapper>
          <ActorImage
            loaded={imageLoaded}
            src={`https://image.tmdb.org/t/p/w342${poster}`}
            alt={name}
            onLoad={() => setImageLoaded(true)}
          />
        </>
      ) : (
        <div>
          <ActorPlaceholder />
        </div>
      )}
      <ActorName>{name}</ActorName>
      <Role>{role}</Role>
    </StyledActorTile>
  );
};

export default ActorTile;
