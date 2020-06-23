import React from "react";
import { connect } from "react-redux";

import {
  removeItem,
  decreaseItem,
  increaseItem,
} from "../../store/ducks/cart/actions";
import {
  Container,
  ImageContainer,
  Field,
  Quantity,
  QuantityValue,
  QuantityArrow,
  RemoveButton,
} from "./styles";

function CheckoutItem({ item, removeItem, decreaseItem, increaseItem }) {
  const { name, quantity, price, imageUrl } = item;

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="Item" />
      </ImageContainer>

      <Field>{name}</Field>

      <Quantity>
        <QuantityArrow
          className="unselectable"
          onClick={() => decreaseItem(item)}
        >
          &#10094;
        </QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow
          className="unselectable"
          onClick={() => increaseItem(item)}
        >
          &#10095;
        </QuantityArrow>
      </Quantity>

      <Field>${price}</Field>

      <RemoveButton className="unselectable" onClick={() => removeItem(item)}>
        &#10005;
      </RemoveButton>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increaseItem: (item) => dispatch(increaseItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
