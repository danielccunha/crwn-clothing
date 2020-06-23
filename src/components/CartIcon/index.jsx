import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../store/ducks/cart/actions";
import { selectCartItemsCount } from "../../store/ducks/cart/selectors";
import { Container, Icon, ItemCount } from "./styles";

function CartIcon({ toggleCartHidden, quantity }) {
  return (
    <Container onClick={toggleCartHidden}>
      <Icon />
      <ItemCount className="unselectable">{quantity}</ItemCount>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
