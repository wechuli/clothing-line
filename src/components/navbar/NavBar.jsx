import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./NavBar.scss";
import { auth } from "../../firebase/firebase.utils";

function NavBar(props) {
  const { currentUser } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
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
    </div>
  );
}

export default NavBar;
