import './Register.css';
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register conteiner">
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" >
      <input
          className="register__input"
          placeholder="Имя"
          type="password"
          name="password"
        />
        <input
          className="register__input"
          placeholder="Еmail"
          type="email"
          name="email"
        />
        <input
          className="register__input"
          placeholder="Пароль"
          type="password"
          name="password"
        />

        <button
          className="register__button"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in" className="register__link">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}
export default Register;