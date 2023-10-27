import "./Portfolio.css";
import image from "../../images/img-portfolio.svg";

function Portfolio () {
  return (
<section className="portpholio">
<h4 className="portpholio__name">Портфолио</h4>
<ul className="portpholio__links">
  <li className="portpholio__list-element portpholio__line">
    <a
      href="https://github.com/Marina-Zinchenko/how-to-learn"
      className="portpholio__link"
    >
      Статичный сайт
    </a>
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
</section>
)
}

export default Portfolio;