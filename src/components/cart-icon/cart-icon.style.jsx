import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import style from "styled-components";

export const ShopCartIcon = style(ShoppingCartIcon)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = style.div`
width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;
