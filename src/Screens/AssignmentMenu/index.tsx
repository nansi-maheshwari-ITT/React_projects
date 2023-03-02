import { Card, CardHeading, Assignmentlist } from "./AssignmentMenuStyle";
import { AssignmentMenuProps } from "./AssignmentMenuProps";
import AssignmentItem from "./Components/AssignmentItem/AssignmentItem";

const AssignmentMenu: React.FC<AssignmentMenuProps> = ({
  handleMenuSelection,
}) => {
  const assignmentsList=["Counter","Form","Status Checker"]
  return (
    <>
      <Card>
        <CardHeading>Week 3 Assignments</CardHeading>
        <Assignmentlist>
         { assignmentsList.map((item,index)=>(
          <AssignmentItem  key={index} handleMenuSelection={handleMenuSelection}  assignmentName={item}></AssignmentItem>
         ))}
       </Assignmentlist>
      </Card>
    </>
  );
};

export default AssignmentMenu;
