import { useState } from "react";
import { AuthButton } from "../../../../Components/Atoms/AuthButton/AuthButton";
import { SignIn, SignOut } from "../../../../Constants/Constants";
import { useCheckFriendStatus } from "../../../../Hooks/useCheckFriendStatus";
import { Div, Heading } from "./FriendStatusStyle";

export const FriendStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const friendStatus = useCheckFriendStatus(isOnline);

  const handleStatusChange = () => {
    setIsOnline(!isOnline);
  };

  return (
    <Div>
      <Heading>Your Friend is {friendStatus}</Heading>
      {isOnline === true ? (
        <AuthButton
          handleStatusChange={handleStatusChange}
          AuthButtonText={SignOut}
        ></AuthButton>
      ) : (
        <AuthButton
          handleStatusChange={handleStatusChange}
          AuthButtonText={SignIn}
        ></AuthButton>
      )}
    </Div>
  );
};
