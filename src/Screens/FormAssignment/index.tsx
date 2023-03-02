import { FormAssignmentProps } from "./FormAssignmentProps";
import { HomeButton } from "../../Components/Atoms/HomeButton/HomeButton";
import { Form } from "./Components/Form/Form";

const FormAssignment: React.FC<FormAssignmentProps> = ({
  handleMenuSelection,
}) => {
  return (
    <>
      <HomeButton handleMenuSelection={handleMenuSelection}></HomeButton>
      <Form></Form>
    </>
  );
};

export default FormAssignment;
