import styled from 'styled-components';
const FormInput = styled.input`
  display: block;
  margin: 20px auto;
  padding: 20px;
  background-color: #dde3e7;
  border: none;
  border-radius: 10px;
`;

interface inputProps{
	type:string;
	placeholder:string;

}
export const InputField:React.FC<inputProps> = ({type,placeholder}) => {
  return (
	<FormInput type={type} placeholder={placeholder} ></FormInput>
  )
}
