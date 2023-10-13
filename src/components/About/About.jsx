import './About.css';
import world from '../../images/text__COLOR_landing-logo.svg';
function About() {
  return (
    <div className="about">
      <div className='about__container'>
      <h1 className='about__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='about__paragraph'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button className='about__button'>Узнать больше</button>
      </div>
      <img className="about__image" src={world} alt="Изображение недоступно" />
    </div>
  );
}
export default About;