import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.style.scss";
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className='logo'/>
      </Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="option">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
);

export default Header;
