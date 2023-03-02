import { useState, useEffect, useRef } from "react";
import { FormData } from "./FormDataInterface";
import { Input, FormContainer, FormDiv } from "./FormStyle";
import { SignIn } from "./Constants";
import { AuthButton } from "../../../../Components/Atoms/AuthButton/AuthButton";

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const emailFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
    }
  }, [formData.email]);

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: value,
    }));
  };

  const handleFormDataSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({ email: "", password: "" });
  };

  return (
    <FormContainer onSubmit={handleFormDataSubmit}>
      <FormDiv>
        <Input
          type="text"
          ref={emailFieldRef}
          name="email"
          value={formData.email}
          placeholder="Enter Your email address"
          onChange={handleFormDataChange}
        />

        <Input
          type="text"
          name="password"
          value={formData.password}
          placeholder="Enter Your password"
          onChange={handleFormDataChange}
        />
      </FormDiv>
      <AuthButton authButtonText={SignIn}></AuthButton>
    </FormContainer>
  );
};
