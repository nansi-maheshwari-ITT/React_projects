import React from "react";
import { ListItem, LiDiv } from "./AssignmentItemStyle";
import { AssignmentItemProps } from "./AssignmentItemProps";

const AssignmentItem: React.FC<AssignmentItemProps> = ({
  handleMenuSelection,
  assignmentName,
}) => {
  const handleItemClick = () => {
    {assignmentName === "Counter" && (
      handleMenuSelection("counterScreen")
     )}
    {assignmentName === "Form" && (
     handleMenuSelection("formScreen")
    )}
    {assignmentName === "Status Checker" && (
      handleMenuSelection("statusCheckerScreen")
     )}
  }

  return (
    <ListItem>
      <LiDiv onClick={handleItemClick}>{assignmentName} Assignment</LiDiv>
    </ListItem>
  );
};

export default AssignmentItem;
