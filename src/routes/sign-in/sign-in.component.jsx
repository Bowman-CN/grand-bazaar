import {
  auth,
  signInGoogleWithPopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInGoogleWithPopup();
    console.log(response);
    const { user } = response;
    await createUserDocFromAuth(user);
  };

  return (
    <div>
      Sign In Page
      <div>
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
};
export default SignIn;
