import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CounterBtn = styled.button`
  padding: 10px;
  margin: 1em;

  :hover {
    background-color: #b3cddd;
  }

  .svg-inline--fa {
    height: 1.25em;
  }
`;

interface CounterButtonProps {
  handleButtonClick: () => void;
  icon: IconDefinition;
  testId:string;
}
export const CounterButton: React.FC<CounterButtonProps> = ({
  handleButtonClick,
  icon,
  testId,
}) => {
  return (
    <CounterBtn data-testid={testId} onClick={handleButtonClick}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </CounterBtn>
  );
};
