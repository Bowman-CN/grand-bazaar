import {
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style";

export const BUTTON_TYPE = {
  default: "default",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonByType = (type) => {
  return {
    [BUTTON_TYPE.default]: DefaultButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[type];
};

const Button = ({ children, buttonType = BUTTON_TYPE.default, ...buttonOptions }) => {
  const CustomeButton = getButtonByType(buttonType);
  return <CustomeButton {...buttonOptions}>{children}</CustomeButton>;
};

export default Button;
