import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
