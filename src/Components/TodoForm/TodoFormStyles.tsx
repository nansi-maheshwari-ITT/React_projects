import styled from "styled-components";

const InputField=styled.form`
margin: 20px 0px;
  height: 35px;
  display: flex;
`;

const Input=styled.input`
width: 85%;
  font-size: 17px;
  padding-left: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
`
const AddButton=styled.button`
width: 10%;
background: linear-gradient(to bottom, #6d9db1, #db82d0);
color: white;
margin-left: 10px;
cursor: pointer;
opacity: 0.5;
border-radius: 3px;
font-size: 20px;
border: none;
pointer-events: none;

&.active {
	opacity: 1;
	pointer-events: auto;
  }
`;

export {InputField,Input,AddButton};