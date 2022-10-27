import { useState } from "react";
import {
  createAuthUserWithSignUpForm,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";

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
        <label htmlFor="display_name">Display Name</label>
        <input
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">SUBMIT for SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUp;
