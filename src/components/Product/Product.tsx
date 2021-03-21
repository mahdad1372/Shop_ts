import React, { useState } from "react";
import { useHistory } from "react-router-dom";
interface props {
  img: string;
  title: string;
  cost: string;
}
const Product = (props: props) => {
  let history = useHistory();
  return (
    <div>
      <div className="container2 text-center">
        <img
          style={{ width: 300 }}
          src={props.img}
          alt="Avatar"
          className="image2"
          onClick={() => history.push("/shop/slides")}
        />
        <div className="overlay2">
          <a className="button-style2">Add to cart</a>
        </div>
        <br />
        <a className="text-style1">{props.title}</a>
        <br />
        <a className="text-style1 text-danger">{props.cost}</a>
      </div>
    </div>
  );
};
export default Product;
