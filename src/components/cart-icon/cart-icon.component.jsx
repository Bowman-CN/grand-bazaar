import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

const CartIcon = () => {
  const { showDropdown, setShowDropdown,cartItems } = useContext(ShoppingCartContext);

  const toggleShoppingCartDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="cart-icon-container" onClick={toggleShoppingCartDropdown}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{cartItems && cartItems.length ? cartItems.length : "0"}</span>
    </div>
  );
};
export default CartIcon;
