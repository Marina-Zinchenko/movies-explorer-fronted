import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <ul className="aboutProject__container">
        <li className="aboutProject__list">
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutProject__list">
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="aboutProject__line">
        <figure className="aboutProject__line-green">1 неделя</figure>
        <figure className="aboutProject__line-grey">4 недели</figure>
        <p className="aboutProject__text">Back-end</p>
        <p className="aboutProject__text">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;
