import "./product-card.style.scss";
import Button from "../button/button.component";
import { ShoppingCartContext } from "../../contexts/shopping-cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addToCart } = useContext(ShoppingCartContext);
  const addToCartHandler = () => {
    addToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartHandler}>
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
