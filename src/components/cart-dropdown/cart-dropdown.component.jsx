import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  console.log("cart has==>", cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <span className="empty-message">Let's start shopping</span>
        )}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
