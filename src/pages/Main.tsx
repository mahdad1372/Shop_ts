import React from "react";

import Slider from "../components/Slider/Slider";
import Title from "../components/Title/Title";
import Newarrivels from "../components/Newarrivels/Newarrivels";
import Deals from "../components/Deals/Deals";
import "../App.css";

const Main = () => {
  return (
    <div>
      <Slider />
      <Title />
      <Newarrivels />
      <Deals />
    </div>
  );
};

export default Main;
