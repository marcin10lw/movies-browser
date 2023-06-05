import { ActorPlaceholder } from "../../ActorPlaceholder";
import { ActorInfo } from "../../types";
import {
  StyledAbout,
  ActorBio,
  ActorImage,
  BirthInfo,
  Name,
  SpecificInfo,
  OptionalInfo,
} from "./styled";

type AboutProps = {
  actorInfo: ActorInfo;
};

const About = ({ actorInfo }: AboutProps) => {
  return (
    actorInfo && (
      <StyledAbout>
        {actorInfo.profile_path ? (
          <ActorImage
            src={`https://image.tmdb.org/t/p/w500${actorInfo.profile_path}`}
            alt={actorInfo.name}
          />
        ) : (
          <ActorPlaceholder />
        )}

        <div>
          <Name>{actorInfo.name}</Name>
          <BirthInfo>
            {actorInfo.birthday && (
              <div>
                <SpecificInfo>
                  <OptionalInfo>date of</OptionalInfo> birth:
                </SpecificInfo>
                {actorInfo.birthday.replaceAll("-", ".")}
              </div>
            )}
            {actorInfo.place_of_birth && (
              <div>
                <SpecificInfo>Place of birth:</SpecificInfo>
                {actorInfo.place_of_birth}
              </div>
            )}
          </BirthInfo>
        </div>

        <ActorBio>{actorInfo.biography}</ActorBio>
      </StyledAbout>
    )
  );
};

export default About;
