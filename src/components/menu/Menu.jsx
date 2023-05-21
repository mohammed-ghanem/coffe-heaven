import React from "react";
import Headimg from "../../assets/heading-img.png";
import MenuJsonData from "./MenuJsonData";

const Menu = () => {
  /*start json menu card data*/

  const menuDetails = MenuJsonData.MenuData.map(({ img, title }, idx) => (
    <div key={idx} className="col-md-4 text-center">
      <img src={img} className="" style={{ maxWidth: "60%" }} alt="cardImage" />
      <h5 className="text-black-50 fw-bold mt-3 h5">{title}</h5>
    </div>
  ));
  /*end json menu card data*/

  return (
    <section id="menu" className="container mt-3">
      <div className="text-center">
        <img src={Headimg} alt="Headimg" className="img-fluid"/>
        <h3 className="sectionTitle"> Popular Menu</h3>
      </div>
      <div className="row mt-3">{menuDetails}</div>
    </section>
  );
};

export default Menu;
