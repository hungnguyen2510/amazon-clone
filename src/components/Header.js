import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://m.media-amazon.com/images/G/02/gc/designs/livepreview/amzn_logo_squid_noto_email_v2016_uk-main._CB463270308_.png"
          alt=""
          className="header_logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="hearder_searchIcon"></SearchIcon>
      </div>

      <header className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">You</span>
          <span className="header_optionLineTwo">Primes</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo">0</span>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;