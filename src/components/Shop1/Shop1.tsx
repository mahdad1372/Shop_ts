import React from "react";
import { connect } from "react-redux";
import "../App.css";

class Shop1 extends React.Component {
  constructor() {
    super();
    this.state = {
      check1: "",
      check2: "",
      check3: "",
      check4: "",
    };
  }
  render() {
    return (
      <div>
        <div className="ml-3 mb-3 shop12">
          <h3>Categories</h3>
          <br />
          <h4>All</h4>
          <h4>Women</h4>
          <h4>Men</h4>
          <h4>Kids</h4>
        </div>

        <div className="ml-3" style={{ marginTop: 65 }}>
          <h3>Filters</h3>

          <div className="line5"></div>

          <label className="container66 mt-3 ml-3" onClick={this.props.Shoe}>
            Shoes
            <input
              onClick={() => {
                this.state.check1 === ""
                  ? this.setState({
                      check1: "checked",
                      check2: "",
                      check3: "",
                      check4: "",
                    })
                  : this.setState({ check1: "" });
              }}
              type="checkbox"
              checked={this.state.check1}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container66 ml-3" onClick={this.props.Bags}>
            Bags
            <input
              onClick={() => {
                this.state.check2 === ""
                  ? this.setState({
                      check2: "checked",
                      check1: "",
                      check3: "",
                      check4: "",
                    })
                  : this.setState({ check2: "" });
              }}
              type="checkbox"
              checked={this.state.check2}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container66 ml-3" onClick={this.props.Shirt}>
            Tshirts
            <input
              onClick={() => {
                this.state.check3 === ""
                  ? this.setState({
                      check3: "checked",
                      check1: "",
                      check2: "",
                      check4: "",
                    })
                  : this.setState({ check3: "" });
              }}
              type="checkbox"
              checked={this.state.check3}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container66 ml-3" onClick={this.props.Sun}>
            Sunglasses
            <input
              onClick={() => {
                this.state.check4 === ""
                  ? this.setState({
                      check4: "checked",
                      check1: "",
                      check2: "",
                      check3: "",
                    })
                  : this.setState({ check4: "" });
              }}
              type="checkbox"
              checked={this.state.check4}
            />
            <span className="checkmark"></span>
          </label>
          <div className="line5"></div>
          <div className="search-container">
            <form>
              <input
                type="text"
                placeholder="Search your products"
                name="search"
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
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
  };
};

const mapDispachToProps = (dispach: (arg0: { type: string }) => any) => {
  return {
    Shoe: () => dispach({ type: "Shoe" }),
    Bags: () => dispach({ type: "Bags" }),
    Shirt: () => dispach({ type: "Shirt" }),
    Sun: () => dispach({ type: "Sun" }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Shop1);
