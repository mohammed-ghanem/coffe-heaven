import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Facility from "./components/facility/Facility";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Ourlocation from "./components/ourlocation/Ourlocation";
import Subscribe from "./components/subscribe/Subscribe";
import Team from "./components/team/Team";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Facility />
      <Menu />
      <Gallery />
      <Team />
      <Contact />
      <Subscribe />
      <Ourlocation/>
      <Footer />
    </>
  );
}

export default App;
