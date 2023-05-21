import React from "react";
import "./about.css";
import AboutSection from "../../assets/about-img.svg";

const About = () => {
  return (
    <section id="about" className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={AboutSection} alt="about" className="img-fluid"/>
        </div>
        <div className="col-md-6">
          <div className="about-text-content">
            <h2 className="fw-bold">
              A Cup Of Coffee Can Complete Your Day
            </h2>
            <p className="main-P fw-bold lh-lg fst-italic mt-4 mb-5 pe-5">
              We commit to doing the right thing for our customers and for the
              environment. As such, we take every opportunity to improve the way
              we source products ensuring we are always striving to do better.
            </p>
            <a className="main-btn fw-bold" href="#menu">
              Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
