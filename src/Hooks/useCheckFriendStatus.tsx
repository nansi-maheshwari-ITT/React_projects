import { useState,useEffect } from "react";

export const useCheckFriendStatus=(isOnline:boolean)=>{
	const [friendStatus, setFriendStatus] = useState<string>('');

useEffect(() => {
  if (isOnline) {
    setFriendStatus('online');
  } else {
    setFriendStatus('offline');
  }
}, [isOnline]);

return friendStatus
}
