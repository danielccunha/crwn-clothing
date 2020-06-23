import React from "react";

import { Container, Image, ItemDetails, Name } from "./styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <Container>
      <Image src={imageUrl} alt="Item" />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </Container>
  );
}

export default CartItem;
