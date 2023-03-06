import styled from "styled-components";
import PoetryImage from "../../Images/Poetry.jpeg";
import OfficeImage from "../../Images/Office.jpeg";
import DanceImage from "../../Images/Dance.jpeg";
import AboutCard from "./Components/AboutCard";

const AboutContainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  justify-content: center;
  margin-top: 5em;
`;

const About = () => {
	const aboutData = [
		{ src: OfficeImage, aboutText: "Software Trainee" },
		{ src: PoetryImage, aboutText: "Poet & Storyteller" },
		{ src: DanceImage, aboutText: "Classical Dancer" },
	  ];
	  
  return (
    <AboutContainer>
       {aboutData.map((data, index) => (
        <AboutCard key={index} src={data.src} aboutText={data.aboutText} />
      ))}
    </AboutContainer>
  );
};

export default About;
