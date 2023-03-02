import { useState, useEffect } from "react";

export const UseCheckFriendStatus = (isOnline: boolean) => {
  const [friendStatus, setFriendStatus] = useState<string>("");

  useEffect(() => {
   {isOnline?setFriendStatus("online"):setFriendStatus("offline")}
  }, [isOnline]);

  return friendStatus;
};
