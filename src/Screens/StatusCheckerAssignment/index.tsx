import { StatusCheckerAssignmentProps } from "./StatusCheckerAssignmentProps";
import { HomeButton } from "../../Components/Atoms/HomeButton/HomeButton";
import { FriendStatus } from "./Components/FriendStatus/FriendStatus";
const StatusCheckerAssignment: React.FC<StatusCheckerAssignmentProps> = ({
  handleMenuSelection,
}) => {
  return (
    <>
      <HomeButton handleMenuSelection={handleMenuSelection}></HomeButton>
      <FriendStatus></FriendStatus>
    </>
  );
};

export default StatusCheckerAssignment;
