import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex navbar">
        <div className="p-2 mr-auto">
          <img src={require("../img/logo12.png")} style={{ width: 92 }} />
        </div>
        <div className="p-2">
          <a>Home</a>
        </div>
        <div className="p-2">
          <a>Shop</a>
        </div>
        <div className="p-2">
          <a>Sale</a>
        </div>
        <div className="p-2">
          <a>Features</a>
        </div>
        <div className="p-2">
          <a>Login</a>
        </div>
        <div className="p-2">
          <a>Register</a>
        </div>
        <div className="p-2">
          <a>Contact</a>
        </div>
        <div className="p-2 text-style">
          <a>About us</a>
        </div>
        <div className="p-2">
          <i className="fas fa-2x fa-user"></i>
        </div>
        <div className="p-2">
          <i className="fas fa-2x fa-shopping-bag"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
