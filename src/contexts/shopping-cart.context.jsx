import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  cartItems: null,
  showDropdown: false,
  addToCart: () => null,
  setShowDropdown: () => null,
});

const addToCartHelper = (currentItems, productToadd) => {
  if (currentItems && currentItems.length > 0) {
    if (currentItems.find((item) => item.id === productToadd.id)) {
      return currentItems.map((item) =>
        item.id === productToadd.id
          ? { ...item, quantity: item.quantity+1 }
          : item
      );
    }
    return [...currentItems, { ...productToadd, quantity: 1 }];
  }
  return [{ ...productToadd, quantity: 1 }];
};

export const ShopingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const addToCart = (product) => {
    const res = addToCartHelper(cartItems, product);
    setCartItems(res);
  };

  const value = {
    cartItems,
    showDropdown,
    setShowDropdown,
    addToCart,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
