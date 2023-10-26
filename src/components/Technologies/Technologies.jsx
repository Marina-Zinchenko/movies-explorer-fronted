import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies">
      <h2 className="technologies__title">Технологии</h2>
      <div className="technologies__container">
        <h3 className="technologies__subtitle">7 технологий</h3>
        <p className="technologies__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="technologies__nav">
          <li>
            <a className="technologies__link" href="https://doka.guide/html/">
              HTML
            </a>
          </li>
          <li>
            <a
              className="technologies__link"
              href="https://doka.guide/css/css-rule/"
            >
              CSS
            </a>
          </li>
          <li>
            <a
              className="technologies__link"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              JS
            </a>
          </li>
          <li>
            <a
              className="technologies__link"
              href="https://ru.react.js.org/docs/getting-started.html"
            >
              React
            </a>
          </li>
          <li>
            <a
              className="technologies__link"
              href="https://github.com/git-guides"
            >
              Git
            </a>
          </li>
          <li>
            <a className="technologies__link" href="https://expressjs.com/ru/">
              Express.js
            </a>
          </li>
          <li>
            <a className="technologies__link" href="https://www.mongodb.com/">
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Technologies;
