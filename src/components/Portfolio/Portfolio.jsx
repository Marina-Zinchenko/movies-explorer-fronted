import "./Portfolio.css";
import image from "../../images/img-portfolio.svg";

function Portfolio() {
  return (
    <section className="portpholio">
      <div className="portpholio__container">
        <h4 className="portpholio__name">Портфолио</h4>
        <ul className="portpholio__links">
          <li className="portpholio__list-element portpholio__line">
            <a
              href="https://github.com/Marina-Zinchenko/how-to-learn"
              className="portpholio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Статичный сайт
            </a>
            <div className="portpholio__img-link"></div>
            <img
              className="portpholio__img-link"
              src={image}
              alt="Изображение недоступно"
            />
          </li>
          <li className="portpholio__list-element portpholio__line">
            <a
              href="https://github.com/Marina-Zinchenko/russian-travel"
              className="portpholio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Адаптивный сайт
            </a>
            <img
              className="portpholio__img-link"
              src={image}
              alt="Изображение недоступно"
            />
          </li>
          <li className="portpholio__list-element">
            <a
              href="https://github.com/Marina-Zinchenko/react-mesto-api-full-gha"
              className="portpholio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Одностраничное приложение
            </a>
            <img
              className="portpholio__img-link"
              src={image}
              alt="Изображение недоступно"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
