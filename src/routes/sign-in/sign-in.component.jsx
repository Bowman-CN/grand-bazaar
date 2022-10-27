import {
  auth,
  signInGoogleWithPopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/sign-up.component";
import Button from "../../components/button/button.component";

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
        <Button
          children={"Sign In With Google"}
          buttonType={'google'}
          onClick={logGoogleUser}
        />
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
};
export default SignIn;
