import './Technologies.css';

function Technologies() {
  return (
    <div className="technologies">
     <h2 className='technologies__title'>Технологии</h2>
     <div className='technologies__container'>
     <h3 className='technologies__subtitle'>7 технологий</h3>
     <p className='technologies__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <nav className='technologies__nav'>
    <p className='technologies__link'>HTML</p>
    <p className='technologies__link'>CSS</p>
    <p className='technologies__link'>React</p>
    <p className='technologies__link'>Git</p>
    <p className='technologies__link'>Express.js</p>
    <p className='technologies__link'>mongoDB</p>
    </nav>
    </div>
    </div>
  );
}
export default Technologies;