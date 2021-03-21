import React from "react";
import Shop1 from "../Shop1/Shop1";
import { connect } from "react-redux";
import Product from "../Product/Product";

interface props {
  img1: string;
  title1: string;
  img2: string;
  title2: string;
  img3: string;
  title3: string;
  img4: string;
  title4: string;
  img5: string;
  title5: string;
  img6: string;
  title6: string;
  type: string;
}
class Shop extends React.Component<props> {
  render() {
    return (
      <div>
        <div className="container6 text-white">
          <br />
          <br />
          <br />
          <br />
          <a>Nike shoe</a>
          <br />
          <a>New arrivel for you</a>
        </div>
        <div className="container-fluid shop">
          <div className="row" style={{ marginTop: 55 }}>
            <div className="col-lg-3 col-md-12 text-left">
              <Shop1 />
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="container mt-3">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product
                      cost="$3,000"
                      img={this.props.img1}
                      title={this.props.title1}
                      type={this.props.type}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product
                      cost="$6,000"
                      img={this.props.img2}
                      title={this.props.title2}
                      type={this.props.type}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product
                      cost="$50,000"
                      img={this.props.img3}
                      title={this.props.title3}
                      type={this.props.type}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product
                      cost="$3,000"
                      img={this.props.img4}
                      title={this.props.title4}
                      type={this.props.type}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product
                      cost="$6,000"
                      img={this.props.img5}
                      title={this.props.title5}
                      type={this.props.type}
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product
                      cost="$50,000"
                      img={this.props.img6}
                      title={this.props.title6}
                      type={this.props.type}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {
  img1: any;
  title1: any;
  img2: any;
  title2: any;
  img3: any;
  title3: any;
  img4: any;
  title4: any;
  img5: any;
  title5: any;
  img6: any;
  title6: any;
  name: any;
  type: any;
}) => {
  return {
    img1: state.img1,
    title1: state.title1,
    img2: state.img2,
    title2: state.title2,
    img3: state.img3,
    title3: state.title3,
    img4: state.img4,
    title4: state.title4,
    img5: state.img5,
    title5: state.title5,
    img6: state.img6,
    title6: state.title6,
    name: state.name,
    type: state.type,
  };
};

export default connect(mapStateToProps, {})(Shop);
