import "./Menu.css";
import { useState } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, NavLink } from "react-router-dom";

function Menu () {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const getLinkClassName = (isActive) => {
    return isActive
      ? "navigation-bar__link navigation-bar__link_active"
      : "navigation-bar__link";
  };

  return (
    <>
      <ul className="navigation-bar">
        <li className="navigation-bar__list-item">
          <NavLink
            to="/movies"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation-bar__list-item">
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => getLinkClassName(isActive)}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <Link to="/profile" className="header__navigation-bar-button">
        <div className="header__navigation-bar-icon-button">
          <p>Аккаунт</p>
          <div className="header__navigation-bar-icon">
          </div>
        </div>
      </Link>

      <BurgerButton setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
      />
    </>
  );
};

export default Menu;
