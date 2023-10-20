import './Main.css';
import About from '../Promo/Promo';
import Project from '../AboutProject/AboutProject';
import Technologies from '../Technologies/Technologies';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <div className="main">
      <About/>
      <Project/>
      <Technologies/>
      <AboutMe/>
    </div>
  );
}
export default Main;