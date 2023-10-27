import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Technologies from "../Technologies/Technologies";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Technologies />
      <AboutMe />
      <Portfolio/>
    </main>
  );
}
export default Main;
