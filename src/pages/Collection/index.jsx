import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../store/ducks/shop/selectors";
import CollectionItem from "../../components/CollectionItem";
import { Container, Title, Items } from "./styles";

function Collection({ collection: { title, items } }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
