import logo from "../../images/logo.svg";
import './Header.css';
import imgHeader from '../../images/icon__COLOR_icon-main.svg';
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <ul className="header__content">
        <li className="headre__element header__element-block">
          <p className="header__nav">Фильмы</p>
          <p className="header__nav">Сохраненные фильмы</p>
        </li>
        <li className="headre__element header__icon-block">
          <p className="header__icon">Аккаунт</p>
          <button className="header__icon-button"><img src={imgHeader} alt="Пользователь"/></button>
        </li>
      </ul>
    </header>
  );
}
export default Header;