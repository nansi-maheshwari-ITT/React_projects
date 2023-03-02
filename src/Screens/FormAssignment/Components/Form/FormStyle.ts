import styled from "styled-components";
const FormContainer = styled.form`
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 10px;

  @media (max-width: 600px) {
    max-width: 350px;
  }
`;

const Input = styled.input`
  display: block;
  margin: 20px auto;
  padding: 20px;
  background-color: #dde3e7;
  border: none;
  border-radius: 10px;
`;

const FormDiv = styled.div`
  margin-top: 4em;
`;

export { FormContainer, Input, FormDiv };
