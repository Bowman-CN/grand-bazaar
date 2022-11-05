import "./checkout-item.style.scss";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import { useContext } from "react";

const CheckoutItem = ({ product }) => {
  const { name, quantity, imageUrl, price } = product;
  const { setItemQuantity } = useContext(ShoppingCartContext);
  const setItemQUantityByOne = (number) => {
    setItemQuantity(product, product.quantity + number);
  };
  const removeCartItem = () => setItemQuantity(product, 0);
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <div>
        <span>{name}</span>
      </div>
      <div>
        <button onClick={() => setItemQUantityByOne(-1)}>{"<"}</button>
        {quantity}
        <button onClick={() => setItemQUantityByOne(1)}>{">"}</button>
      </div>
      <div>${price}</div>
      <div>
        <button onClick={removeCartItem}>X</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
