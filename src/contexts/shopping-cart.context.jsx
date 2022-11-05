import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  cartItems: null,
  showDropdown: false,
  addToCart: () => null,
  setItemQuantity: () => null,
  setShowDropdown: () => null,
});

const addToCartHelper = (currentItems, productToadd) => {
  if (currentItems && currentItems.length > 0) {
    if (currentItems.find((item) => item.id === productToadd.id)) {
      return currentItems.map((item) =>
        item.id === productToadd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...currentItems, { ...productToadd, quantity: 1 }];
  }
  return [{ ...productToadd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};
const setItemQuantityHelper = (cartItems, product, targetQuantity) => {
  return cartItems.map((item) =>
    item.id === product.id ? { ...item, quantity: targetQuantity } : item
  );
};

export const ShopingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const addToCart = (product) => {
    const res = addToCartHelper(cartItems, product);
    setCartItems(res);
  };

  const setItemQuantity = (product, targetQuantity) => {
    console.log("quantity -> ", product.quantity, targetQuantity);
    if (targetQuantity < 1) {
      // remove
      setCartItems(removeItemFromCart(cartItems, product));
    } else {
      // set
      setCartItems([
        ...setItemQuantityHelper(cartItems, product, targetQuantity),
      ]);
    }
  };

  const value = {
    cartItems,
    showDropdown,
    setShowDropdown,
    addToCart,
    setItemQuantity,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
