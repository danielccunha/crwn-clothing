import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import CartItem from "../CartItem";
import { selectCartItems } from "../../store/ducks/cart/selectors";
import { toggleCartHidden } from "../../store/ducks/cart/actions";
import { Container, Items, EmptyMessage, Button } from "./styles";

function CartDropdown({ items, dispatch }) {
  const history = useHistory();

  return (
    <Container>
      <Items>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </Items>

      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({ items: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
