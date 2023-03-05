import { useSelector } from "react-redux";
import { selectActorInfo } from "../actorSlice";
import {
  StyledAbout,
  ActorBio,
  ActorImage,
  BirthInfo,
  Name,
  SpecificInfo,
} from "./styled";

const About = () => {
  const actorInfo = useSelector(selectActorInfo);

  return (
    <StyledAbout>
      <ActorImage
        src={`https://image.tmdb.org/t/p/w500${actorInfo.profile_path}`}
      />

      <div>
        <Name>{actorInfo.name}</Name>
        <BirthInfo>
          <div>
            <SpecificInfo>Date of birth:</SpecificInfo>
            {actorInfo.birthday}
          </div>
          <div>
            <SpecificInfo>Place of birth</SpecificInfo>
            {actorInfo.place_of_birth}
          </div>
        </BirthInfo>
      </div>

      <ActorBio>{actorInfo.biography}</ActorBio>
    </StyledAbout>
  );
};

export default About;
