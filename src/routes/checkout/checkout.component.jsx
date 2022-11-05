import "./checkout.style.scss";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const cartAmout = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  return (
    <div className="checkout-items-container">
      <div className="header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems && cartItems.length ? (
        cartItems.map((item) => <CheckoutItem key={item.id} product={item} />)
      ) : (
        <p>Let's start shopping ...</p>
      )}
      <div className="total">
        TOTAL:
        <span> $ {cartAmout}</span>
      </div>
    </div>
  );
};

export default Checkout;
