import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  items: null,
  showDropdown: false,
  setItems: () => null,
  setShowDropdown: () => null,
});

export const ShopingCartProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const value = { items, setItems, showDropdown, setShowDropdown };
  console.log("cart context-display:", showDropdown);
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
