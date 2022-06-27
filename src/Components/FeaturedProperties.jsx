import React, { useEffect, useRef } from "react";
import { Bed, Room, Kitchen, Closet, Aircon, Bathroom, Pax } from "../Assets";

function FeaturedProperties({
  featuredImage,
  title,
  col,
  room,
  bed,
  aircon,
  kitchen,
  bathroom,
  closet,
  pax,
}) {


  return (
    <React.Fragment>
      <div className={col}>
        <div
          className="card featured-card shadow-sm"
          style={{ backgroundImage: `url(${featuredImage})` }}
          loading="lazy"
        >
          <div className="card-body">
            <div className="d-flex flex-wrap flex-column justify-content-end align-items-center h-100">
              <div className="d-flex flex-wrap featured-headerpt-5">
                <h1 className="text-white fw-bold">{title}</h1>
              </div>
              <div className="d-flex flex-wrap featured-details">
                <button className="btn btn-light m-3 rounded-pill">
                  <img src={Room} alt="Room" className="me-3" width="20"></img>
                  {room}
                </button>
                <button className="btn btn-light m-3 rounded-pill">
                  <img src={Bed} alt="Bed" className="me-3" width="20"></img>
                  {bed}
                </button>
                <button
                  className="btn btn-light m-3 rounded-pill"
                  data-bs-toggle="popover"
                  title="Aircon"
                >
                  <img
                    src={Aircon}
                    alt="Closet"
                    className="me-3"
                    width="20"
                  ></img>
                  {aircon}
                </button>
                <button
                  className="btn btn-light m-3 rounded-pill"
                  data-bs-toggle="popover"
                  title="Kitchen"
                >
                  <img
                    src={Kitchen}
                    alt="Kitchen"
                    className="me-3"
                    width="20"
                  ></img>
                  {kitchen}
                </button>
                <button className="btn btn-light m-3 rounded-pill">
                  <img
                    src={Bathroom}
                    alt="Bathroom"
                    className="me-3"
                    width="20"
                  ></img>
                  {bathroom}
                </button>
                <button className="btn btn-light m-3 rounded-pill">
                  <img
                    src={Closet}
                    alt="Closet"
                    className="me-3"
                    width="20"
                  ></img>
                  {closet}
                </button>
                <button className="btn btn-light m-3 rounded-pill">
                  <img
                    src={Pax}
                    alt="Allowed Tenants"
                    className="me-3"
                    width="20"
                  ></img>
                  {pax}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeaturedProperties;
