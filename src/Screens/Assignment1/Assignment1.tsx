import { AssignmentProps as Assignment1Props } from "../../Interfaces/SharedInterfaces";
import { HomeButton } from "../../Components/Atoms/HomeButton/HomeButton";
import { CounterBox } from "./Components/CounterBox/CounterBox";

const Assignment1: React.FC<Assignment1Props> = ({ handleMenuSelection }) => {
  return (
    <>
      <HomeButton handleMenuSelection={handleMenuSelection}></HomeButton>
      <CounterBox></CounterBox>
    </>
  );
};

export default Assignment1;
