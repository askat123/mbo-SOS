import React from "react";
import ermek from "../../img/div.t524__bgimg (1).png";
import os2 from "../../img/osnovatel1.png";
import os3 from "../../img/osnovatel2.png";
import os4 from "../../img/osnovatel3.png";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import "./fond.scss";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import otchet from "../../img/otchet.jpeg";

const Fondom = () => {
  return (
    <section>
      <div id="fondom">
        <div className="container">
          <div className="fondom">
            <h1>СОСТАВ ФОНДА</h1>
            <div className="fondom-big">
              <div className="fondom-block">
                <img src={os2} alt="" />
                <h2>Омуров Э.Е</h2>
                <p>Основатель фонда</p>
              </div>
              <div className="fondom-block">
                <img src={ermek} alt="" />
                <h2>Карыев Азат</h2>
                <p>
                  Руководитель отдела по реализации <br /> cоц.проектов
                </p>
                <div className="wifi">
                  <Link
                    style={{
                      color: "black",
                      fontSize: "25px",
                    }}
                    to={
                      "https://api.whatsapp.com/send/?phone=996703484846&text&type=phone_number&app_absent=0"
                    }
                  >
                    <AiOutlineWhatsApp />
                  </Link>
                  <Link
                    style={{
                      color: "black",
                      fontSize: "25px",
                    }}
                    to={"https://www.instagram.com/volonter.kg/"}
                  >
                    <AiOutlineInstagram />
                  </Link>
                </div>
              </div>
              <div className="fondom-block">
                <img src={os3} alt="" />
                <h2>Cулайманов Эдильбек</h2>
                <p>
                  Заместитель Руководителя
                  <br /> Фонда
                </p>
              </div>
              <div className="fondom-block">
                <img src={os4} alt="" />
                <h2>Усенов Кубаныч</h2>
                <p>Соучредитель фонда</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="otchet">
        <div className="container">
          <div className="otchet">
            <h1>Отчеты и документы</h1>

            <div className="big-otchet">
              <div className="otchet-block">
                <img style={{ width: "50%" }} src={otchet} alt="" />
              </div>
            </div>
            <center>
              <Link to={"/otchet"}>
                <button>Архив отчетов</button>
              </Link>
            </center>
          </div>
        </div>
      </div>

      <div id="karta">
        <div className="container">
          <div className="karta">
            <div className="karta-title">
              <h1>Расположения</h1>
              <h2>г.Бишкек ул.Минина 47</h2>
              <h2>+996 552 221 112</h2>
              <h3>sosfond.kg@gmail.com</h3>
              <div className="karta-icon">
                <h4 className="what">
                  <BsWhatsapp />
                </h4>
                <h4 className="tel">
                  <LiaTelegramPlane />
                </h4>
                <h4 className="inst">
                  <AiOutlineInstagram />
                </h4>
              </div>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7030869856326!2d74.5859839761351!3d42.8580021711511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d4b4577d25%3A0x5b524f885dbefb10!2zNDcg0YPQuy4g0JzQuNC90LjQvdCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1699289014711!5m2!1sru!2skg"
                width="950"
                height="350"
                style={{ border: "0px", color: "", width: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="visit--contact__map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fondom;
