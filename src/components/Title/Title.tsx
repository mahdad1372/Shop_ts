import React from "react";
import Shoe from "../../img/shoe93.jpg";
import Watch from "../../img/watch2.jpg";
import Jacket from "../../img/jacket3.jpg";
const Title = () => {
  return (
    <div className="mt-3 mb-3">
      <div className="d-flex justify-content-center mb-3 title">
        <div className="p-2">
          <h2>Our products</h2>
        </div>
      </div>
      <div className="container title">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container3">
              <a className="button-style1">Shoes</a>
              <img src={Shoe} className="img-size1" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container3">
              <a className="button-style1">Watches</a>
              <img src={Watch} className="img-size1" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container3">
              <a className="button-style1">Swishirts</a>
              <img src={Jacket} className="img-size1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
