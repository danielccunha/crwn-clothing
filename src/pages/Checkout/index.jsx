import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/ducks/cart/selectors";
import CheckoutItem from "../../components/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";

import "./styles.scss";

function Checkout({ items, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>

      <StripeCheckoutButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
