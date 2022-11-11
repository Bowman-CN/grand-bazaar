import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import {ShopCartIcon,CartIconContainer}from "./cart-icon.style";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";

const CartIcon = () => {
  const { setShowDropdown, itemCounts} = useContext(ShoppingCartContext);

  const toggleShoppingCartDropdown = () => {
    setShowDropdown();
  };
  return (
    <CartIconContainer onClick={toggleShoppingCartDropdown}>
      <ShopCartIcon />
      <span className="item-count">{itemCounts}</span>
    </CartIconContainer>
  );
};
export default CartIcon;
