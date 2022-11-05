import { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../shop-data.js";
import { getCategoriesAndDocs } from "../utils/firebase/firebase.js";

export const ProductContext = createContext({
  categoryMap: {},
});

export const ProductProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const getContent = async () => {
      const res = await getCategoriesAndDocs();
      setCategoryMap(res);
    };
    getContent();
  }, []);

  const value = { categoryMap };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
