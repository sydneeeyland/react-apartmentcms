import React from "react";

function Carousel({ interval, image, alt, label, description, active }) {
  active = active ? "carousel-item active" : "carousel-item";
  return (
    <React.Fragment>
      <div className={active} data-bs-interval={interval}>
        <img src={image} className="d-block w-100" width={"1500px"} height={"750px"} alt={alt} loading="lazy" />
        <div className="carousel-caption d-none d-md-block">
          <h5>{label}</h5>
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Carousel;
