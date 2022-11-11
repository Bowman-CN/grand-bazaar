import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <span className="empty-message">Let's start shopping</span>
        )}
      </div>
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
