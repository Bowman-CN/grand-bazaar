import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutFromFirebase } from "../../utils/firebase/firebase";

const Navigation = () => {
  /**  any components that hooks with context, component JS (function for instance)
   * will be executed every time when the context value changed
   * BUT rerendering only happens when the context value is being used in component JSX
   */
  const { currentUser } = useContext(UserContext);
  const { showDropdown } = useContext(ShoppingCartContext);

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
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutFromFirebase}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {showDropdown && <CartDropdown />}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
