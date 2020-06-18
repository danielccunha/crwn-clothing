import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

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

const mapStateToProps = ({ cart }) => {
  return { items: Object.values(cart.items) };
};

export default connect(mapStateToProps)(CartDropdown);
