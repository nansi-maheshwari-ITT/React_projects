import { useState } from "react";
import {
  faArrowUp,
  faArrowDown,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { CounterCard, CountBox } from "./CounterBoxStyle";
import { CounterButton } from "../CounterButton/CounterButton";

export const CounterBox = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const handleDecrementCount = () => {
    setCount(count - 1);
  };
  const handleResetCount = () => {
    setCount(0);
  };
  return (
    <>
      <CounterCard>
        <CountBox>Count : {count}</CountBox>
        <CounterButton
          handleCounterButtonClick={handleIncrementCount}
          icon={faArrowUp}
        />
        <CounterButton
          handleCounterButtonClick={handleDecrementCount}
          icon={faArrowDown}
        />
        <CounterButton
          handleCounterButtonClick={handleResetCount}
          icon={faRotateRight}
        />
      </CounterCard>
    </>
  );
};
