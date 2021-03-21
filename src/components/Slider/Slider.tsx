import React, { Component } from "react";
import Next from "../../img/next.png";
import Back from "../../img/back.png";
import Leather from "../../img/leather2.jpg";
import Shoe from "../../img/show14.jpg";
import Tshirt from "../../img/tshirt55.jpg";
import { Carousel } from "react-bootstrap";

class slider extends React.Component {
  render() {
    return (
      <Carousel
        className="carosel"
        controls={true}
        indicators={false}
        nextIcon={<img src={Next} />}
        prevIcon={<img src={Back} />}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={Leather} alt="First slide" />
          <Carousel.Caption className="carosel-caption">
            <p className="text-white">Top Leather For you</p>
            <p className="text-white">With best quality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Shoe} alt="Third slide" />

          <Carousel.Caption className="carosel-caption">
            <p>Top Leather For you</p>
            <p>With best quality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Tshirt} alt="Third slide" />

          <Carousel.Caption className="carosel-caption">
            <p>Top Leather For you</p>
            <p>With best cost</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default slider;
