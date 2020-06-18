import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../config/firebase";
import { selectCartHidden } from "../../store/ducks/cart/selectors";
import { selectCurrentUser } from "../../store/ducks/user/selectors";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./styles.scss";

function Header({ currentUser, hidden }) {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
