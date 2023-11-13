import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Requisites from "./components/Requisites";
import AboutFound from "./components/AboutFound";
import HomePage from "./components/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/requisites"} element={<Requisites />} />
          <Route path={"/aboutFound"} element={<AboutFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
