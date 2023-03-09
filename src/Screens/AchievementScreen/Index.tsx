import styled from "styled-components";
import { AchievementCard } from "./Components/AchievementCard";

const achievementText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore fugit voluptatum nesciunt rem tenetur veritatis, animi ipsum sit eos.";

const MainDiv = styled.div`
  display: flex;
`;

const Achievements = () => {
  return (
    <MainDiv>
      {[...Array(3)].map((_, index) => (
        <AchievementCard key={index} achievementText={achievementText} />
      ))}
    </MainDiv>
  );
};

export default Achievements;
