import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  const location = useLocation().pathname;

  const headerEndpoints =
    location === "/movies" ||
    location === "/saved-movies" ||
    location === "/profile";
  return (
    <header className={`header ${headerEndpoints ? "header__type-color" : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <div className="header__content">
        {!isLoggedIn && <Navigation />}
        {isLoggedIn && <Menu />}
      </div>
    </header>
  );
}

export default Header;
