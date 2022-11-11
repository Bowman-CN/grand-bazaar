import { createContext, useReducer } from "react";

export const ShoppingCartContext = createContext({
  cartItems: null,
  showDropdown: false,
  addToCart: () => null,
  setItemQuantity: () => null,
  setShowDropdown: () => null,
});

const INITIAL_STATE = {
  cartItems: null,
  itemCounts: 0,
  showDropdown: false,
};

export const SHOPPING_CART_ACTIONS = {
  TOGGLE_DROPDOWN_CART: "TOGGLE_DROPDOWN_CART",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  UPDATE_ITEM_QUANTITY: "UPDATE_ITEM_QUANTITY",
};

const shoppingCartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOPPING_CART_ACTIONS.TOGGLE_DROPDOWN_CART:
      return {
        ...state,
        showDropdown: !state.showDropdown,
      };

    case SHOPPING_CART_ACTIONS.ADD_ITEM_TO_CART:
      return {
        ...state,
        ...payload,
      };
    case SHOPPING_CART_ACTIONS.UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};

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

const setItemQuantityHelper = (cartItems, product, targetQuantity) => {
  if (targetQuantity < 1) {
    // remove
    return cartItems.filter((item) => item.id !== product.id);
  } else {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: targetQuantity } : item
    );
  }
};

export const ShopingCartProvider = ({ children }) => {
  const [{ cartItems, itemCounts, showDropdown }, dispatch] = useReducer(
    shoppingCartReducer,
    INITIAL_STATE
  );

  const addToCart = (product) => {
    dispatch({
      type: SHOPPING_CART_ACTIONS.ADD_ITEM_TO_CART,
      payload: {
        cartItems: [...addToCartHelper(cartItems, product)],
        itemCounts: itemCounts + 1,
      },
    });
  };

  const setItemQuantity = (product, targetQuantity) => {
    dispatch({
      type: SHOPPING_CART_ACTIONS.UPDATE_ITEM_QUANTITY,
      payload: {
        cartItems: setItemQuantityHelper(cartItems, product, targetQuantity),
        itemCounts:
          targetQuantity < 1
            ? itemCounts - product.quantity
            : targetQuantity > product.quantity
            ? itemCounts + (targetQuantity - product.quantity)
            : itemCounts - (product.quantity - targetQuantity),
      },
    });
  };

  const setShowDropdown = () => {
    dispatch({
      type: SHOPPING_CART_ACTIONS.TOGGLE_DROPDOWN_CART,
    });
  };

  const value = {
    cartItems,
    showDropdown,
    itemCounts,
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
