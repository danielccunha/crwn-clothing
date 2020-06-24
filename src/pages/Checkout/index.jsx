import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/ducks/cart/selectors";
import CheckoutItem from "../../components/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";
import { Container, Header, HeaderBlock, Total } from "./styles";

function Checkout({ items, total }) {
  return (
    <Container>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>

      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <Total>
        <span>TOTAL: ${total}</span>
      </Total>

      <StripeCheckoutButton price={total} />
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
