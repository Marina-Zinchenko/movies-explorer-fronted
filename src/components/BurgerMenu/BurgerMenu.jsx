import "./BurgerMenu.css";
import { NavLink, Link } from "react-router-dom";

function BurgerMenu({ isBurgerMenuOpen, setIsBurgerMenuOpen }) {
  const handleClickClose = () => {
    setIsBurgerMenuOpen(false);
  };
  const getLinkClassName = (isActive) => {
    return isActive
      ? "burger-menu__link burger-menu__link_active"
      : "burger-menu__link";
  };

  return (
    <nav className={`burger-menu ${isBurgerMenuOpen && "burger-menu_active"}`}>
      <button
        className="burger-menu__button-close"
        type="button"
        onClick={handleClickClose}
      />
      <ul className="burger-menu__link-list">
        <li className="burger-menu__link-list-item">
          <NavLink
            onClick={handleClickClose}
            className={({ isActive }) => getLinkClassName(isActive)}
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li className="burger-menu__link-list-item">
          <NavLink
            onClick={handleClickClose}
            className={({ isActive }) => getLinkClassName(isActive)}
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="burger-menu__link-list-item">
          <NavLink
            onClick={handleClickClose}
            className={({ isActive }) => getLinkClassName(isActive)}
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="burger-menu__link-list-item">
          <Link
            onClick={handleClickClose}
            className="burger-menu__profile-button"
            to="/profile"
          >
            <div className="burger-menu__navigation-bar-icon-button">
            <p>Аккаунт</p>
            <div className="burger-menu__profile-button-icon">
            </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
