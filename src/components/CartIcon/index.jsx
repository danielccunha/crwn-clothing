import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../store/ducks/cart/actions";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

import "./styles.scss";

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count unselectable">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
