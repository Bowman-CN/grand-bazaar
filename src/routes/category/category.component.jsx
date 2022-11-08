import { SingleCategoryBody, SingleCategoryTitle } from "./category.style";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(ProductContext);
  return (
    <>
      <SingleCategoryTitle>{category.toUpperCase()}</SingleCategoryTitle>

      <SingleCategoryBody>
        {categoryMap &&
          categoryMap[category].map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </SingleCategoryBody>
    </>
  );
};

export default Category;
