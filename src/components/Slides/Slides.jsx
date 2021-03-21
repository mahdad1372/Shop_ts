import React, { Component } from "react";
import Slider from "react-slick";
import Shoe3 from "../../img/shoe3.jpg";
import Shoe4 from "../../img/shoe4.jpg";
import Shoe5 from "../../img/shoe5.jpg";
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          <div>
            <div className="d-flex justify-content-center">
              <div className="container5">
                <img src={Shoe3} className="img-size6" />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <div className="container5">
                <img src={Shoe4} className="img-size6" />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <div className="container5">
                <img src={Shoe5} className="img-size6" />
              </div>
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={false}
          focusOnSelect={true}
        >
          <div>
            <div className="d-flex justify-content-center">
              <div className="container8">
                <img src={Shoe3} className="img-size7" />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <div className="container8">
                <img src={Shoe4} className="img-size7" />
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <div className="container8">
                <img src={Shoe5} className="img-size7" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
