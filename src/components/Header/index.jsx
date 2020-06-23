import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../config/firebase";
import { selectCartHidden } from "../../store/ducks/cart/selectors";
import { selectCurrentUser } from "../../store/ducks/user/selectors";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { Container, LogoContainer, OptionsContainer, Option } from "./styles";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

function Header({ currentUser, hidden }) {
  return (
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        {currentUser ? (
          <Option as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </Option>
        ) : (
          <Option to="/signin">SIGN IN</Option>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
