import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import "./header.style.scss";
const Header = ({currentUser}) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="option">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="option">
        {currentUser?
         <div onClick={()=>auth.signOut()}>SignOut</div>:
        <Link to="/signIn">SignIn</Link>
        }
      </div>
    </div>
  </div>
);

export default Header;
