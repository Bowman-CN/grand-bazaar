import { useState } from "react";
import {
  createAuthUserWithSignUpForm,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const signUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formfields, setFormFields] = useState(signUpFormFields);
  const { displayName, email, password, confirmPassword } = formfields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };
  const resetFields = () => {
    setFormFields({ ...signUpFormFields });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formfields);
    try {
      const response = await createAuthUserWithSignUpForm(
        formfields.email,
        formfields.confirmPassword
      );
      console.log("-res-", response);
      await createUserDocFromAuth(response.user, {
        displayName,
      });
      resetFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("This Email Address is Already In Use");
      }
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up with Your Email and Password.</h1>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            required: true,
            onChange: handleChange,
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "text",
            name: "email",
            required: true,
            onChange: handleChange,
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            required: true,
            onChange: handleChange,
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            required: true,
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button children={"SIGN UP"} />
      </form>
    </div>
  );
};

export default SignUp;
