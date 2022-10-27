import {
  signInGoogleWithPopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInGoogleWithPopup();
    console.log(response);
    await createUserDocFromAuth(response.user);
  };
  return (
    <div>
      Sign In Page
      <div>
        <button onClick={logGoogleUser}>Sign In With Google</button>
      </div>
    </div>
  );
};
export default SignIn;
