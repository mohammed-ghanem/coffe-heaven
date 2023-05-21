import React from "react";
import "./team.css";
import Headimg from "../../assets/heading-img.png";
import TeamData from "./TeamData";

const Team = () => {
  /*start json Gallery data*/
  const AllTeam = TeamData.TeamNames.map(({ img, name }, idx) => (
    <div key={idx} className="col-md-4 text-center">
      <img
        src={img}
        className="mt-3 maxWdith-70 rounded-circle"
        alt="img-gallery"
      />
      <h6 className="text-black-50 fw-bold mt-3 h5">{name}</h6>
    </div>
  ));
  /*end json Gallery data*/
  return (
    <section id="team" className="container mt-3">
      <div className="text-center">
        <img src={Headimg} alt="Headimg" className="img-fluid"/>
        <h3 className="sectionTitle"> Our Team</h3>
      </div>

      <div className="row mt-3">{AllTeam}</div>
    </section>
  );
};

export default Team;
