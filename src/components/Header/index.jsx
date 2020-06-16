import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../config/firebase";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./styles.scss";

export default function Header({ user }) {
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
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  );
}
