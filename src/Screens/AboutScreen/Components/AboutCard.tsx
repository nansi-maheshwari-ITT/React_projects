import styled from "styled-components";
interface aboutCardProps {
  src: string;
  aboutText: string;
}

const AboutDiv = styled.div`
  margin: 0px 35px;
`;
const AboutImg = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 150px;
  @media (max-width: 768px) {
    height: 160px;
    width: 160px;
    border-radius: 100px;
  }
`;
const AboutContent = styled.p`
  text-align: center;
  font-weight: bold;
`;
const AboutCard: React.FC<aboutCardProps> = ({ src, aboutText }) => {
  return (
    <AboutDiv>
      <AboutImg src={src}></AboutImg>
      <AboutContent>{aboutText}</AboutContent>
    </AboutDiv>
  );
};

export default AboutCard;
