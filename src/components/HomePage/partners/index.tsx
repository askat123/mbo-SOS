import React from "react";
import partner1 from "../../../img/partner1.png";
import partner2 from "../../../img/partner2.png";
import partner3 from "../../../img/partner3.png";
import partner4 from "../../../img/partner4.png";
import partner5 from "../../../img/partner5.png";
import partner6 from "../../../img/partner6.png";
import partner7 from "../../../img/partner7.jpg";
import partner8 from "../../../img/partner8.jpg";

const Partners = () => {
  return (
    <div id="partners">
      <div className="container">
        <div className="partners__content">
          <center>
            <h1>Наши партнеры</h1>
            <div
              className="image"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner1}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner2}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner3}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner4}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner5}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner6}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner7}
                alt=""
              />
              <img
                style={{ width: "20%", padding: "20px 0" }}
                src={partner8}
                alt=""
              />
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Partners;
