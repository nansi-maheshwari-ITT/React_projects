import { AssignmentProps as Assignment3Props } from "../../Interfaces/SharedInterfaces";
import { HomeButton } from "../../Components/Atoms/HomeButton/HomeButton";
import { FriendStatus } from "./Components/FriendStatus/FriendStatus";
const Assignment3: React.FC<Assignment3Props> = ({ handleMenuSelection }) => {
  return (
    <>
      <HomeButton handleMenuSelection={handleMenuSelection}></HomeButton>
      <FriendStatus></FriendStatus>
    </>
  );
};

export default Assignment3;
