import './Project.css';

function Project() {
  return (
    <div className="project">
     <h2 className='project__title'>О проекте</h2>
     <div className='project__container'>
     <p className='project__subtitle'>Дипломный проект включал 5 этапов</p>
     <p className='project__subtitle'>На выполнение диплома ушло 5 недель</p>
     <p className='project__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
     <p className='project__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </div>
    </div>
  );
}
export default Project;