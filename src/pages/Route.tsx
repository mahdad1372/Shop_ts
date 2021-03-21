import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar2 from "../components/Navbar2/Navbar2";
import Footer from "../components/Footer/Footer";
import Shop from "../components/Shop2/Shop2";
import Main from "./Main";
import Slides from "../components/Slides/Slides";
import Img from "../components/Imgs/img";

const Route2 = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {window.location.pathname === "/" ||
        window.location.pathname === "/shop" ? (
          <Navbar2 />
        ) : null}

        <Route exact path="/" component={() => <Main />} />
        <Route
          path="/shop"
          component={() =>
            window.location.pathname === "/shop" ? <Shop /> : null
          }
        />
        <Route path="/shop/slides" component={() => <Slides />} />
        <Route path="/img" component={() => <Img />} />
        {window.location.pathname === "/" ||
        window.location.pathname === "/shop" ? (
          <Footer />
        ) : null}
      </BrowserRouter>
    </div>
  );
};

export default Route2;
