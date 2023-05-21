import React from "react";
import "./subscribe.css";
import SubJmage from "../../assets/sub.svg";

const Subscribe = () => {
  return (
    <section id="subscribe" className="">
      <div className="subscribe-content container row m-auto align-items-center">
        <div className="col-md-6 sub-mail text-center">
          <form>
            <label className="fw-bold sectionTitle">Subscribe</label>
            <div className="d-flex">
              <input
                type="email"
                required
                className="form-control"
                placeholder="Your Email Address"
              />
              <input
                type={"submit"}
                value="Subscribe"
                required
                className="main-btn fw-bold border-0 d-block m-auto"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img src={SubJmage} alt="subImage" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
