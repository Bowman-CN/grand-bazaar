import "./category.style.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(ProductContext);
  return (
    <div>
      <h2>
        <span>{category.toUpperCase()}</span>
        <div>
          {categoryMap && categoryMap[category].map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        </div>
      </h2>
    </div>
  );
};

export default Category;
