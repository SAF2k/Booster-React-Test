import React from "react";
import headerLogo from "../../assets/header-brand-logo.png";
import "./header.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="mainHeading">
      <h5 className="news">Financing option available at checkout.</h5>
      <header className="header">
        <a href="#home">
          <img src={headerLogo} alt="logo" className="headerLogo" />
        </a>
        <nav className="nav">
          <a href="#ESkateBanners">Electric Skateboards</a>
          <a href="#rev">Electric Scooters</a>
          <a href="/">Accessories</a>
          <a href="/">Gift Card</a>
          <a href="/">More Info</a>
        </nav>
        <div className="profile">
          <a href="/">
            <CgProfile />
          </a>
          <a href="/">
            <AiOutlineShoppingCart />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
