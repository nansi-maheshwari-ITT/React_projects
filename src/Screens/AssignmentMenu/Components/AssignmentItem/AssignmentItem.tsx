import React from "react";
import { Li, LiDiv } from "./AssignmentItemStyle";
import { AssignmentItemProps } from "./AssignmentItemProps";

const AssignmentItem: React.FC<AssignmentItemProps> = ({
  handleMenuSelection,
  assignmentNumber,
}) => {
  const handleItemClick = () => {
    handleMenuSelection(assignmentNumber);
  };

  return (
    <Li>
      <LiDiv onClick={handleItemClick}>Assignment {assignmentNumber}</LiDiv>
    </Li>
  );
};

export default AssignmentItem;
