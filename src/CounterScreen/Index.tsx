import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseNumber, increaseNumber, resetNumber } from "../Actions/Index";
import { CounterButton } from "./Components/CounterButton/Index";
import { InputField } from "./Components/InputField/Index";
import styled from "styled-components";
import {
  faArrowUp,
  faArrowDown,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

interface State {
  changeCount: number;
}
const CounterCard = styled.div`
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  max-height: 400px;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 600px) {
    max-width: 350px;
  }
`;
const CountBox = styled.div`
  height: fit-content;
  background-color: #e7c8e4;
  padding: 1em;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Counter: React.FC = (): JSX.Element => {
  const [incrementAmount, setIncrementAmount] = useState<string>("1");
  const [decrementAmount, setDecrementAmount] = useState<string>("1");
  const countValue = useSelector((state: State) => state.changeCount);
  const dispatch = useDispatch();

  const handleIncreaseNumber = () => {
    if (Number(incrementAmount) > 0) {
      dispatch(increaseNumber(incrementAmount));
    } else {
      alert("Enter valid number");
    }
  };

  const handleDecreaseNumber = () => {
    if (Number(decrementAmount) > 0) {
      dispatch(decreaseNumber(decrementAmount));
    } else {
      alert("Enter valid number");
    }
  };

  const handleResetNumber = () => {
    dispatch(resetNumber());
  };
  const inputFields = [
    {
      value: incrementAmount,
      handleInputFieldChange: setIncrementAmount,
      inputText: "Increment By",
    },
    {
      value: decrementAmount,
      handleInputFieldChange: setDecrementAmount,
      inputText: "Decrement By",
    },
  ];

  const counterButtons = [
    {
      testId: "increment-button",
      handleButtonClick: handleIncreaseNumber,
      icon: faArrowUp,
     
    },
    {
      handleButtonClick: handleDecreaseNumber,
      icon: faArrowDown,
      testId: "decrement-button",
    },
    {
      handleButtonClick: handleResetNumber,
      icon: faRotateRight,
      testId: "reset-button",
    },
  ];

  return (
    <CounterCard>
      <CountBox data-testid="Count">Count : {countValue}</CountBox>
      {inputFields.map((inputField, index) => (
        <InputField
          key={index}
          value={inputField.value}
          inputText={inputField.inputText}
          handleInputFieldChange={inputField.handleInputFieldChange}
        />
      ))}
      {counterButtons.map((button, index) => (
        <CounterButton
          key={index}
          handleButtonClick={button.handleButtonClick}
          icon={button.icon}
          testId={button.testId}
        />
      ))}
    </CounterCard>
  );
};

export default Counter;
