import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { selectCartItems } from "../../store/ducks/cart/selectors";
import { toggleCartHidden } from "../../store/ducks/cart/actions";

import "./styles.scss";

function CartDropdown({ items, dispatch }) {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({ items: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
