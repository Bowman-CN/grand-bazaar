import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <div>
        <h2>I already have an account</h2>
        <h3>Sign in with your email and password</h3>
        <SignIn />
      </div>
      <div>
        <h2>I do not have an account</h2>
        <h3>Sign up with your email and password</h3>
        <SignUp />
      </div>
    </div>
  );
};
export default Authentication;
