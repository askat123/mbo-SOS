import { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import kg from "../../img/kg.svg";
import gl1 from "../../img/gl1.png";
import gl2 from "../../img/gl2.png";
import gl3 from "../../img/gl3.png";
import galle from "../../img/18-45-51-32083148_471526176597737_5789001399677222912_n.jpg";
import galle2 from "../../img/18-46-28-32158991_471525106597844_9029742245292539904_n.jpg";
import galle3 from "../../img/43302813_2044514922525546_5444592529171283968_n.jpg";
import galle4 from "../../img/about.png";
import galle5 from "../../img/Rectangle 15.png";
import ten1 from "../../img/ten1.jpg";
import Programm from "../HomePage/Programm";
import Puzl from "../Puzl/puzl";
const Gallery = () => {
  const [hovered, setHovered] = useState(false);
  const navig = useNavigate();
  return (
    <>
      <div id="gallery">
        <div className="gallery">
          <div className="container">
            <div className="gallery__text">
              <img className="kg" src={kg} alt="" />
            </div>
            <div className="gallery__img">
              <h1>
                ЛЮДИ РАБОТАЮТ{" "}
                <span>
                  С <br /> ЛЮДМИ🤝!
                </span>
              </h1>
              <div className="gallery__img-img">
                <img className="gl1" src={gl1} alt="" />
                <img className="gl2" src={gl2} alt="" />
                <img className="gl3" src={gl3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="title">
        <div className="container">
          <div className="title">
            <h1>НАМ 10 ЛЕТ</h1>
            <div className="title__img">
              <img src={ten1} alt="" />
              <img src={galle} alt="" />
            </div>
            <div className="title__img">
              <img src={galle2} alt="" />
              <img src={galle3} alt="" />
            </div>
            <div className="title__img">
              <img src={galle4} alt="" />
              <img src={galle5} alt="" />
            </div>
          </div>
        </div>
        <Programm />
      </div>
    </>
  );
};

export default Gallery;
