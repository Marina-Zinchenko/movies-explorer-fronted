import "./Promo.css";
import world from "../../images/text__COLOR_landing-logo.svg";
function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета <br />
          Веб-разработки.
        </h1>
        <p className="promo__paragraph">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="/" className="promo__link" src="#">
          Узнать больше
        </a>
      </div>
      <img className="promo__image" src={world} alt="Изображение недоступно" />
    </section>
  );
}
export default Promo;
