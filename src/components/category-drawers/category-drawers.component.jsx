import "./category-drawers.style.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryDrawer = () => {
  const { categoryMap } = useContext(ProductContext);

  return (
    <>
      {Object.keys(categoryMap).map((categoryName) => {
        return (
          <div key={categoryName} className="category-preview-container">
            <h2>
              <Link to={`/shop/${categoryName}`}>
                <span className="title">{categoryName.toUpperCase()}</span>
              </Link>
            </h2>
            <div className="preview">
              {categoryMap[categoryName]
                .filter((_, idx) => idx < 4)
                .map((item) => {
                  return <ProductCard key={item.id} product={item} />;
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryDrawer;
