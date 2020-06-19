import React from "react";
import { connect } from "react-redux";

import {
  removeItem,
  decreaseItem,
  increaseItem,
} from "../../store/ducks/cart/actions";

import "./styles.scss";

function CheckoutItem({ item, removeItem, decreaseItem, increaseItem }) {
  const { name, quantity, price, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow unselectable" onClick={() => decreaseItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow unselectable" onClick={() => increaseItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increaseItem: (item) => dispatch(increaseItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
