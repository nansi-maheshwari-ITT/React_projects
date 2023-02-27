import { AssignmentProps as Assignment2Props } from "../../Interfaces/SharedInterfaces";
import { HomeButton } from "../../Components/Atoms/HomeButton/HomeButton";
import { Form } from "./Components/Form/Form";

const Assignment2: React.FC<Assignment2Props> = ({ handleMenuSelection }) => {
  return (
    <>
      <HomeButton handleMenuSelection={handleMenuSelection}></HomeButton>
      <Form></Form>
    </>
  );
};

export default Assignment2;
