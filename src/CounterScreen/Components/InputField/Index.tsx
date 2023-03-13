import styled from "styled-components";
interface InputFieldProps {
  value: string;
  inputText:string;
  handleInputFieldChange: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox = styled.div`
  margin: 30px 0px;

  input {
    height: 20px;
    background-color: white;
    margin-left: 20px;
  }
`;

export const InputField: React.FC<InputFieldProps> = ({
  value,
  inputText,
  handleInputFieldChange,
}) => {
  return (
    <>
      <InputBox>
        <span>{inputText}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => handleInputFieldChange(e.target.value)}
        ></input>
      </InputBox>
    </>
  );
};
