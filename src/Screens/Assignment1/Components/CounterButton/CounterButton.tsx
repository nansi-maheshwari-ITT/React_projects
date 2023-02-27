import { CounterButtonProps } from "./CounterButtonProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CounterBtn } from "./CounterButtonStyle";

export const CounterButton: React.FC<CounterButtonProps> = ({
  icon,
  handleCounterButtonClick,
}) => {
  return (
    <CounterBtn onClick={handleCounterButtonClick}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </CounterBtn>
  );
};
