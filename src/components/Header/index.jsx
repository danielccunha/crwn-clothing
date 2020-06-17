import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../config/firebase";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./styles.scss";

function Header({ currentUser }) {
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
      </div>
    </header>
  );
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps)(Header);
