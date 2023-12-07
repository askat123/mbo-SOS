import React from "react";
import partner from "../../../img/Group 15.png";

const Partners = () => {
  return (
    <div id="partners">
      <div className="container">
        <div className="partners__content">
          <center>
            <h1>Наши партнеры</h1>
            <img
              style={{ width: "70%", padding: "20px 0" }}
              src={partner}
              alt=""
            />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Partners;
