import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutFromFirebase } from "../../utils/firebase/firebase";

const Navigation = () => {
  /**  any components that hooks with context, component JS (function for instance)
   * will be executed every time when the context value changed
   * BUT rerendering only happens when the context value is being used in component JSX
   */
  const { currentUser } = useContext(UserContext);
  console.log("-from-nav", currentUser);

  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <BrandLogo className="logo-svg" />
        </Link>
        <div className="nav-links-container ">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutFromFirebase}>
              {" "}
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
