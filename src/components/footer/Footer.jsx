import React from "react";
import "./footer.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 500) {
      //   setScrollToTop(!ScrollToTop);
      // } else {
      //   setScrollToTop(ScrollToTop);
      // }
      window.scrollY > 500
        ? setScrollToTop(!ScrollToTop)
        : setScrollToTop(ScrollToTop);
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="container">
      <div className="copyRight m-auto row">
        <div className="col-md-6 text-center fw-bold">
          Copyright © 2022 <span className="footer_links">Coffee Heaven</span>
        </div>
        <div className="col-md-6 text-center fw-bold ">
          <span>Developed by </span>
          <a
            className="text-decoration-none footer_links"
            href="https://www.linkedin.com/in/mohammed-a-ghanem"
          >
            Mohammed Ghanem
          </a>
          <span> & </span>
          <a
            className="text-decoration-none footer_links"
            href="https://www.linkedin.com/in/heba-hassan-mostafa/"
          >
            Heba Hassan
          </a>
        </div>
      </div>
      <hr />
      {ScrollToTop && (
        <button
          className="scrollBTN main-btn position-fixed border-0"
          onClick={ScrollUp}
        >
          <i className="fas fa-chevron-circle-up"></i>
        </button>
      )}
    </section>
  );
};

export default Footer;
