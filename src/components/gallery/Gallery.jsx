import React from "react";
import "./gallery.css";
import Headimg from "../../assets/heading-img.png";
import AllGallery from "./GalleryJsonData";

const Gallery = () => {
  /*start json Gallery data*/

  const GalleryPhotos = AllGallery.images.map(({ img }, idx) => (
    <div key={idx} className="col-md-4">
      <img src={img} className="img-fluid mt-3" alt="img-gallery" />
    </div>
  ));
  return (
    <section id="gallery" className="container mt-3">
      <div className="text-center">
        <img src={Headimg} alt="Headimg" className="img-fluid" />
        <h3 className="sectionTitle"> Our Gallery</h3>
      </div>

      <div className="row mt-3">{GalleryPhotos}</div>
    </section>
  );
};

export default Gallery;
