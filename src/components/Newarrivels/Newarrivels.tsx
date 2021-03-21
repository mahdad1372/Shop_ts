import React from "react";
import Bag from "../../img/bag3.jpg";
import Jacket from "../../img/jacket4.jpg";
import Newshoe from "../../img/newshoe2.jpg";
import Watch from "../../img/watch3.jpg";
import Tshirt from "../../img/tshirt3.jpg";
import Jacket2 from "../../img/jacket2.jpg";
const Newarrivels = () => {
  return (
    <div className="mt-3 mb-3 arrivels">
      <div className="d-flex justify-content-center mb-3">
        <div className="p-2">
          <h2>New arrivels</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <div className="p-2 box-style2 active">Best seller</div>
        <div className="p-2 box-style2">Sale</div>
        <div className="p-2 box-style2">Top rated</div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container2 text-center">
              <img
                style={{ width: 300 }}
                src={Bag}
                alt="Avatar"
                className="image2"
              />
              <div className="overlay2">
                <a className="button-style2">Add to cart</a>
              </div>
              <br />
              <a className="text-style1">Addisdas bags</a>
              <br />
              <a className="text-style1 text-danger">$3,000</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container2 text-center">
              <img
                style={{ width: 300 }}
                src={Jacket}
                alt="Avatar"
                className="image2"
              />
              <div className="overlay2">
                <a className="button-style2">Add to cart</a>
              </div>
              <br />
              <a className="text-style1">Catterpilar jackets</a>
              <br />
              <a className="text-style1 text-danger">$6,000</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container2 text-center">
              <img
                style={{ width: 300 }}
                src={Newshoe}
                alt="Avatar"
                className="image2"
              />
              <div className="overlay2">
                <a className="button-style2">Add to cart</a>
              </div>
              <br />
              <a className="text-style1">Nike shoe with best quality</a>
              <br />
              <a className="text-style1 text-danger">$50,000</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container2 text-center">
              <img
                style={{ width: 300 }}
                src={Watch}
                alt="Avatar"
                className="image2"
              />
              <div className="overlay2">
                <a className="button-style2">Add to cart</a>
              </div>
              <br />
              <a className="text-style1">Ferrari watches</a>
              <br />
              <a className="text-style1 text-danger">$5,500</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container2 text-center">
              <img
                style={{ width: 300 }}
                src={Tshirt}
                alt="Avatar"
                className="image2"
              />
              <div className="overlay2">
                <a className="button-style2">Add to cart</a>
              </div>
              <br />
              <a className="text-style1">Catterpilar tshirts</a>
              <br />
              <a className="text-style1 text-danger">$6,300</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
            <div className="container2 text-center">
              <img
                style={{ width: 300 }}
                src={Jacket2}
                alt="Avatar"
                className="image2"
              />
              <div className="overlay2">
                <a className="button-style2">Add to cart</a>
              </div>
              <br />
              <a className="text-style1">Jacket with best quality</a>
              <br />
              <a className="text-style1 text-danger">$52,000</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrivels;
