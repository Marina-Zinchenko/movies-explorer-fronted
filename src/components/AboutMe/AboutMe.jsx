import "./AboutMe.css";
import myPhoto from "../../images/my-photo.jpeg";
import image from "../../images/text__COLOR_font-main.svg";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <ul className="student__container">
        <li className="student__list">
          <h3 className="student__subtitle">Марина</h3>
          <p className="student__text">Веб-разработчик, 32 года</p>
          <p className="student__paragraph">
            Я живу в г. Ростов-на-Дону, с мужем и двумя замечательными
            сыновьями. Находясь в дикретном отпуске решила освоить новую
            специальность. Очень тяжело совмещать обучение с домашними делами.
            Моё обучение подходит к концу, полученые знания буду применять на
            практике.{" "}
          </p>
          <NavLink
            className="student__gh-page"
            href="https://github.com/Marina-Zinchenko"
          >
            Github
          </NavLink>
        </li>
        <li>
          <img
            className="student__foto"
            src={myPhoto}
            alt="Изображение недоступно"
          />
        </li>
      </ul>
      <article className="student__portpholio">
        <h4 className="student__name">Портфолио</h4>
        <ul className="student__links">
          <li className="student__list-element student__line">
            <a
              href="https://github.com/Marina-Zinchenko/how-to-learn"
              className="student__link"
            >
              Статичный сайт
            </a>
            <img
              className="student__img-link"
              src={image}
              alt="Изображение недоступно"
            />
          </li>
          <li className="student__list-element student__line">
            <a
              href="https://github.com/Marina-Zinchenko/russian-travel"
              className="student__link"
            >
              Адаптивный сайт
            </a>
            <img
              className="student__img-link"
              src={image}
              alt="Изображение недоступно"
            />
          </li>
          <li className="student__list-element">
            <a
              href="https://github.com/Marina-Zinchenko/react-mesto-api-full-gha"
              className="student__link"
            >
              Одностраничное приложение
            </a>
            <img
              className="student__img-link"
              src={image}
              alt="Изображение недоступно"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default AboutMe;
