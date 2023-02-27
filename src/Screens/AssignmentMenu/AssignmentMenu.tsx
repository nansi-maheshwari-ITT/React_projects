import { Card, CardHeading, Ul } from "./AssignmentMenuStyle";
import { AssignmentProps as AssignmentMenuProps } from "../../Interfaces/SharedInterfaces";
import AssignmentItem from "./Components/AssignmentItem/AssignmentItem";

const AssignmentMenu: React.FC<AssignmentMenuProps> = ({
  handleMenuSelection,
}) => {
  return (
    <>
      <Card>
        <CardHeading>Week 3 Assignments</CardHeading>
        <Ul>
          <AssignmentItem
            handleMenuSelection={handleMenuSelection}
            assignmentNumber={1}
          ></AssignmentItem>
          <AssignmentItem
            handleMenuSelection={handleMenuSelection}
            assignmentNumber={2}
          ></AssignmentItem>
          <AssignmentItem
            handleMenuSelection={handleMenuSelection}
            assignmentNumber={3}
          ></AssignmentItem>
        </Ul>
      </Card>
    </>
  );
};

export default AssignmentMenu;
