import { CounterAssignmentProps } from "./CounterAssignmentProps";
import { HomeButton } from "../../Components/Atoms/HomeButton/HomeButton";
import { CounterBox } from "./Components/CounterBox/CounterBox";

const CounterAssignment: React.FC<CounterAssignmentProps> = ({
  handleMenuSelection,
}) => {
  return (
    <>
      <HomeButton handleMenuSelection={handleMenuSelection}></HomeButton>
      <CounterBox></CounterBox>
    </>
  );
};

export default CounterAssignment;
