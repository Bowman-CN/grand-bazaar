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
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">
       {name}
      </span>
      <div className="quantity">
        <span className="arrow" onClick={() => setItemQUantityByOne(-1)}>
        &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => setItemQUantityByOne(1)}>
        &#10095;
        </span>
      </div>
      <span className="price">${price}</span>

      <span className="remove-button" onClick={removeCartItem}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
