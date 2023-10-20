import logo from "../../images/logo.svg";
import './Header.css';
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <ul className="header__content">
        <li className="headre__element">
          <p className="header__nav">Регистрация</p>
        </li>
      <li className="headre__element">
      <button className="header__booton">Войти</button>
      </li>
      </ul>
    </header>
  );
}
export default Header;