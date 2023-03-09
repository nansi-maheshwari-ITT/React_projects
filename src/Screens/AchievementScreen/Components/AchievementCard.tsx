import styled from "styled-components";

interface achievementCardProps {
  achievementText: string;
}

const Card = styled.div`
  width: 25%;
  height: 150px;
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 20px;
  margin: auto;
  margin-top: 5em;
`;

export const AchievementCard: React.FC<achievementCardProps> = ({
  achievementText,
}) => {
  return (
    <Card>
      <p>{achievementText}</p>
    </Card>
  );
};
