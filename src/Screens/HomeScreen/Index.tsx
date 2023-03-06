import ProfileImage from "../../Images/Profile.jpeg";
import {
  ProfileContent,
  ProfileDiv,
  ProfileImg,
  Maindiv,
} from "./HomeScreenStyle";

const Home = () => {
  return (
    <Maindiv>
      <ProfileDiv>
        <ProfileImg src={ProfileImage}></ProfileImg>
      </ProfileDiv>
      <ProfileContent>
        <h1>Hi There!</h1>
        <p>My name is Nansi Maheshwari</p>
      </ProfileContent>
    </Maindiv>
  );
};

export default Home;
