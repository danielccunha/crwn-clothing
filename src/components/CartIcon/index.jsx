import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../store/ducks/cart/actions";
import { selectCartItemsCount } from "../../store/ducks/cart/selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./styles.scss";

function CartIcon({ toggleCartHidden, quantity }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count unselectable">{quantity}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
