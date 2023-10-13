import './Main.css';
import About from '../About/About';
import Project from '../Project/Project';
import Technologies from '../Technologies/Technologies';

function Main() {
  return (
    <div className="main">
      <About/>
      <Project/>
      <Technologies/>
    </div>
  );
}
export default Main;