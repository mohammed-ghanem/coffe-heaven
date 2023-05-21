import React from "react";
import "./header.css";
import Background from "../../assets/home-bg.jpg";

const Header = () => {
  return (
    <section id="header" className=" ">
      <div
        className="bg-img opacity-75 overflow-hidden position-relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="overlay w-100 h-100 position-absolute"></div>
        <div className="welcome-text container">
          <div className="welcome-text-content">
            <h1 className="fw-bold fst-italic text-center">Coffee Heaven</h1>
            <p className="main-P fw-bold text-center lh-lg fst-italic">
              We Deliver that Perfect Cup Of Coffee Along With Delicious
              specialty Drink Such As Cappuccinos, Iced Coffees And Smoothies.
            </p>
            <a className="main-btn fw-bold text-center" href="#about">
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
