import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import {ShopCartIcon,CartIconContainer}from "./cart-icon.style";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

const CartIcon = () => {
  const { showDropdown, setShowDropdown,cartItems } = useContext(ShoppingCartContext);

  const toggleShoppingCartDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <CartIconContainer onClick={toggleShoppingCartDropdown}>
      <ShopCartIcon />
      <span className="item-count">{cartItems && cartItems.length ? cartItems.length : "0"}</span>
    </CartIconContainer>
  );
};
export default CartIcon;
