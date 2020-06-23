import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../store/ducks/cart/actions";
import { Container, Image, Footer, Name, Price, AddButton } from "./styles";

import "./styles.scss";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <Container>
      <Image imageUrl={imageUrl} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
