import React from "react";
import "./facility.css";
import Headimg from "../../assets/heading-img.png";
import FacilityJsonData from "./FacilityJsonData";

const Facility = () => {
  /*start json card data*/

  const CardData = FacilityJsonData.FacilityData.map(
    ({ title, pContent, img }, idx) => (
      <div key={idx} className="col-md-3 text-center">
        <img src={img} className="img-fluid" alt="cardImage" />
        <h5 className="fw-bold mt-3 h5">{title}</h5>
        <p className="text-black-50 fw-bold lh-lg fst-italic">{pContent}</p>
      </div>
    )
  );
  /*end json card data*/

  return (
    <section id="our-facility" className="container mt-4">
      <div className="text-center">
        <img src={Headimg} alt="Headimg" className="img-fluid"/>
        <h3 className="sectionTitle"> Our Facility</h3>
      </div>
      <div className="row mt-3">{CardData}</div>
    </section>
  );
};

export default Facility;
