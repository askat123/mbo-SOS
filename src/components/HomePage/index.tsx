import Fondom from "../Fond/fond";
import Puzl from "../Puzl/puzl";
import AboutUs from "./AboutUs";
import Fond from "./Fond";
import Help from "./Help";
import Home from "./Home";
import "../HomePage/";
import Partners from "./partners";
const HomePage = () => {
  return (
    <div>
      <Home />
      <Fond />
      <Puzl />
      <AboutUs />
      <Help />
      <Fondom />
      <Partners />
    </div>
  );
};

export default HomePage;
