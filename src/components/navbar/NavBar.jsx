import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/crown.svg";
import './NavBar.scss';

function NavBar() {
  return (
    <div className="header">
      <Link className="logo-container" exact to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" exact to="/shop">
          SHOP
        </Link>

        <Link className="option" exact to="/shop">
          CONTACT
        </Link>

        <Link className="option" exact to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
