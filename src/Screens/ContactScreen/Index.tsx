import { InputField } from "./Components/InputField";
import { FormContainer, FormDiv, SubmitButton } from "./ContactScreenStyle";
const Contact = () => {
  return (
    <FormContainer>
      <FormDiv>
        <InputField
          type="text"
          placeholder="Enter Your Name"  
        ></InputField>
        <InputField
          type="text"
          placeholder="Enter Your Email"
        ></InputField>
      </FormDiv>
      <SubmitButton>Submit</SubmitButton>
    </FormContainer>
  );
};

export default Contact;
