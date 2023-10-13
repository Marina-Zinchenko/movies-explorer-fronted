import logo from "../../images/logo.svg";
import './Header.css';
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <button className="header__booton">Войти</button>
    </header>
  );
}
export default Header;