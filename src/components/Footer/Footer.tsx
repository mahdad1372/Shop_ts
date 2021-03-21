import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <h5>Get in touch</h5>
          <br />
          <a>Any questions? Let us know in store at 8th floor</a>
          <br />
          <br />
          <i className="fab fa-2x fa-facebook-square mr-2"></i>
          <i className="fab fa-2x fa-whatsapp mr-2"></i>
          <i className="fab fa-2x fa-instagram mr-2"></i>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <h5>Categories</h5>
          <br />
          <a>Men</a>
          <br />
          <a>Women</a>
          <br />
          <a>Dresses</a>
          <br />
          <a>Sunglasses</a>
          <br />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <h5>Links</h5>
          <br />
          <a>Search</a>
          <br />
          <a>About Us</a>
          <br />
          <a>Contact Us</a>
          <br />
          <a>Returns</a>
          <br />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <h5>HELP</h5>
          <br />
          <a>Track Order</a>
          <br />
          <a>Returns</a>
          <br />
          <a>Shipping</a>
          <br />
          <a>FAQs</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
