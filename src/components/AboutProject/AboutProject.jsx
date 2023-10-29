import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
      <ul className="project__content">
        <li className="project__list">
          <h3 className="project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__list">
          <h3 className="project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul> 
      <div className="project__line">
        <figure className="project__line-green">1 неделя</figure>
        <figure className="project__line-grey">4 недели</figure>
        <p className="project__text">Back-end</p>
        <p className="project__text">Front-end</p>
      </div> 
      </div>
    </section>
  );
}
export default AboutProject;
