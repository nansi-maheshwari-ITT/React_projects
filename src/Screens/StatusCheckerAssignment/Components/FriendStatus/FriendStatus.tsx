import { useState } from "react";
import { AuthButton } from "../../../../Components/Atoms/AuthButton/AuthButton";
import { SignIn, SignOut } from "./Constants";
import { UseCheckFriendStatus } from "../../../../Hooks/UseCheckFriendStatus";
import { MainDiv, Heading } from "./FriendStatusStyle";

export const FriendStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const friendStatus = UseCheckFriendStatus(isOnline);

  const handleStatusChange = () => {
    setIsOnline(!isOnline);
  };

  return (
    <MainDiv>
      <Heading>Your Friend is {friendStatus}</Heading>
      {isOnline === true ? (
        <AuthButton
          handleStatusChange={handleStatusChange}
          authButtonText={SignOut}
        ></AuthButton>
      ) : (
        <AuthButton
          handleStatusChange={handleStatusChange}
          authButtonText={SignIn}
        ></AuthButton>
      )}
    </MainDiv>
  );
};
