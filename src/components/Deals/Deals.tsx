import React from "react";
import Timer from "../Timer/Timer";
import Fashion from "../../img/fashion.jpg";
const Deals = () => {
  return (
    <div className="container-fluid Deals">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
          <img src={Fashion} className="img-size3" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <a className="text-style3">Deals of the week</a>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <Timer />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div>
              <a className="button-style3 text-white">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
