import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

export const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
