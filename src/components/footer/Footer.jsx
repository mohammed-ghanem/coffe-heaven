import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="container">
      <div className="copyRight m-auto row">
        <div className="col-md-6 text-center fw-bold">
          Copyright © 2022-2026 <span className="footer_links">Coffee Heaven</span>
        </div>
        <div className="col-md-6 text-center fw-bold ">
          <span>Developed by </span>
          <a
            className="text-decoration-none footer_links"
            href="https://www.linkedin.com/in/mohammed-a-ghanem"
          >
            Mohammed Ghanem
          </a>
        </div>
      </div>
      <hr />

      {scrollToTop && (
        <button
          className="scrollBTN main-btn position-fixed border-0"
          onClick={scrollUp}
        >
          <i className="fas fa-chevron-circle-up"></i>
        </button>
      )}
    </section>
  );
};

export default Footer;