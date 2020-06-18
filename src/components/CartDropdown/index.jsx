import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { selectCartItems } from "../../store/ducks/cart/selectors";

import "./styles.scss";

function CartDropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({ items: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
