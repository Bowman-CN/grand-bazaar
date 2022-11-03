import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  signInGoogleWithPopup,
  createUserDocFromAuth,
  signInWithPlainCredentials,
} from "../../utils/firebase/firebase";

const signInFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(signInFormFields);
  const { email, password } = formFields;
  const nav = useNavigate();
  const handleFieldChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };
  const onSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithPlainCredentials(email, password);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  const logGoogleUser = async () => {
    const response = await signInGoogleWithPopup();
    console.log(response);
    const { user } = response;
  };

  return (
    <div>
      <form onSubmit={onSignIn}>
        <FormInput
          label={"Email"}
          inputOptions={{
            type: "email",
            name: "email",
            value: email,
            required: true,
            onChange: handleFieldChange,
          }}
        />
        <FormInput
          label={"Password"}
          inputOptions={{
            type: "password",
            name: "password",
            value: password,
            required: true,
            onChange: handleFieldChange,
          }}
        />
        <div className="buttons-container">
          <Button>Sign In</Button>
          <Button buttonType={"google"} onClick={logGoogleUser}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
