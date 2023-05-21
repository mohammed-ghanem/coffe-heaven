import React from "react";
import "./contact.css";
import Headimg from "../../assets/heading-img.png";
import ContactImg from "../../assets/contact-img.svg";


const Contact = () => {
  return (
    <section id="contact" className="container mt-3">
      <div className="text-center">
        <img src={Headimg} alt="Headimg" className="img-fluid"/>
        <h3 className="sectionTitle mb-4">Contact Us</h3>
        
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={ContactImg} alt="contactPhoto" />
        </div>
        <div className="col-md-6 bookTable">
          <h6 className="sectionTitle text-center">Book A Table</h6>
          <form>
            <label className="fw-bold">Your Name</label>
            <input
              type={"text"}
              required
              className="form-control"
              maxLength="20"
            />
            <label className="fw-bold">Phone Number</label>
            <input
              type={"number"}
              required
              className="form-control"
              maxLength="15"
            />
            <label className="fw-bold">How Many Tables</label>
            <input
              type={"number"}
              required
              className="form-control"
              min={1}
              max={10}
            />
            <label className="fw-bold">How Many Guests</label>
            <input
              type={"number"}
              required
              className="form-control"
              min={1}
              max={10}
            />
            <label className="fw-bold">Date</label>
            <input type="date" name="date" required className="form-control" />
            <label className="fw-bold">Time</label>
            <input
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="23:00"
              required
              className="form-control"
            />
            <input
              type={"submit"}
              value="Book"
              required
              className="main-btn fw-bold border-0 d-block mt-3 mb-1 m-auto"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
