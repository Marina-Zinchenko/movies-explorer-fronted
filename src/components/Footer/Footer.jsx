import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <p className="footer__year">&copy;2023</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/web/" className="footer__link">
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Marina-Zinchenko/"
            className="footer__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
