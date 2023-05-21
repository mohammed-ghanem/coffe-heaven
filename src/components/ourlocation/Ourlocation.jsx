import React from "react";
import DataLocation from "./Ourlocationdata";

const Ourlocation = () => {
  const AllLocationData = DataLocation.locationIcon.map(
    ({ icon, title, worktime }, idx) => (
      <div className="col-md-3 Contact_c" key={idx}>
        <i className={icon}></i>
        <h5 className="fw-bold mt-3 h5">{title}</h5>
        <h6 className="text-black-50 fw-bold lh-lg">{worktime}</h6>
      </div>
    )
  );
  return (
    <section className="container mt-4 mb-3">
      <div className="row justify-content-center text-center">
        {AllLocationData}
      </div>
      <hr />
    </section>
  );
};

export default Ourlocation;
