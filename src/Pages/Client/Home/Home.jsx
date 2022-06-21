// Package
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "../../../Assets/Style/Home.css";

// Assets
import {
  Wifi,
  Building,
  Security,
  Money,
  FloorPlan,
  HomeSample,
} from "../../../Assets";

// Components
import Carousel from "../../../Components/Carousel";
import CarouselButton from '../../../Components/CarouselButton';
import FeaturedProperties from "../../../Components/FeaturedProperties";

/* move json to different folder */
const carouselSlides = [
  {
    label: "First slide label",
    interval: 3500,
    image:
      "http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg",
    alt: "test",
    description: "Some representative placeholder content for the first slide",
    active: true,
  },
  {
    label: "Second slide label",
    interval: 3500,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/45965399221413.5eede0c8565af.jpg",
    alt: "test",
    description: "Some representative placeholder content for the second slide",
    active: false,
  },
  {
    label: "Third slide label",
    interval: 3500,
    image:
      "https://i.pinimg.com/originals/d6/8a/7f/d68a7f4d07f6c4b841b86505ae0e33f4.jpg",
    alt: "test",
    description: "Some representative placeholder content for the third slide",
    active: false,
  },
];

const properties = [
  {
    featuredImage:
      "https://images.squarespace-cdn.com/content/v1/56369862e4b0e778f327581a/1625134276720-BYE9BENJQYTPMUMY2PZT/2021-23+Riverside+Micro.02.jpg?format=1500w",
    title: "Lorem Ipsum",
    col: "col-lg-12 pb-4",
    room: 1,
    bed: 1,
    aircon: 1,
    kitchen: 1,
    bathroom: 1,
    closet: 1,
    pax: 1,
  },
  {
    featuredImage:
      "https://images.squarespace-cdn.com/content/v1/56369862e4b0e778f327581a/1625134276720-BYE9BENJQYTPMUMY2PZT/2021-23+Riverside+Micro.02.jpg?format=1500w",
    title: "Lorem Ipsum",
    col: "col-lg-6 pb-4",
    room: 1,
    bed: 1,
    aircon: 1,
    kitchen: 1,
    bathroom: 1,
    closet: 1,
    pax: 1,
  },
  {
    featuredImage:
      "https://images.squarespace-cdn.com/content/v1/56369862e4b0e778f327581a/1625134276720-BYE9BENJQYTPMUMY2PZT/2021-23+Riverside+Micro.02.jpg?format=1500w",
    title: "Lorem Ipsum",
    col: "col-lg-6 pb-4",
    room: 1,
    bed: 1,
    aircon: 1,
    kitchen: 1,
    bathroom: 1,
    closet: 1,
    pax: 1,
  },
];

function Home() {
  // const [images, setImages] = useState([]);
  
  // useEffect(() => {
  //   const FetchData = async () => {
  //     const response = await fetch('https://my.api.mockaroo.com/carousel.json?key=b8b25630');
  //     const data = await response.json();
  //     setImages(data);
  //   }

  //   FetchData();
  // }, [])

  return (
    <React.Fragment>
      <section>
        <div className="d-flex flex-column">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators d-none">
              {/* {
                images.map((props, index) => (
                  <CarouselButton slideTo={props.id} active={props.active} />
                ))
              } */}
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div id="carouselMedia" className="carousel-inner">
              {
                carouselSlides.map((props, index) => (
                  <Carousel
                    interval={"3500"}
                    image={props.image}
                    alt={props.alt}
                    label={props.label}
                    description={props.description}
                    active={props.active}
                    key={index}
                  />
                ))
              }
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <main>
          <section className="container-fluid">
            <div
              id="insightVideo"
              className="px-4 py-3 text-center"
              loading="lazy"
            >
              <h1 className="display-5 fw-bold">IN-SIGHT VIDEO</h1>
              <video autoPlay muted controls>
                <source src={HomeSample} type="video/mp4"></source>
              </video>
            </div>
          </section>

          <section>
            <div className="col-12">
              <div className="row">
                <div className="col-12 align-items-center justify-content-center d-flex flex-column py-5 bg-scheme1">
                  <img
                    src={Building}
                    alt="Room"
                    className="me-3"
                    width="50"
                  ></img>
                  <h2 className="fw-bold pb-3 pt-2">
                    FEATURED <span>PROPERTIES</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="container pt-1">
            <div className="col-12">
              <div id="featuredProperties" className="row">
                {properties.map((props, index) => (
                  <FeaturedProperties
                    featuredImage={props.featuredImage}
                    title={props.title}
                    col={props.col}
                    room={props.room}
                    bed={props.bed}
                    aircon={props.aircon}
                    kitchen={props.kitchen}
                    bathroom={props.bathroom}
                    closet={props.closet}
                    pax={props.pax}
                    key={index}
                  />
                ))}
                <div className="col-lg-12 pb-4">
                  <div className="d-flex flex-wrap flex-column justify-content-end align-items-center h-100">
                    <Link
                      to="/apartment"
                      className="btn btn-light btn-sm w-50 fw-bold px-3 py-3 rounded-pill"
                    >
                      SEE MORE ....
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container col-xxl-8 px-4 py-5">
            <div
              id="floorPlanLayout"
              className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center align-items-center"
            >
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={FloorPlan}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 text-center">
                <h1 className="display-5 fw-bold lh-1 mb-3">FLOOR PLAN</h1>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>

          <section>
            <div className="col-lg-12">
              <div id="aboutSection" className="row bg-scheme1 py-5">
                <div
                  id="about-header"
                  className="d-flex flex-wrap flex-column justify-content-center align-items-center"
                >
                  <h2 className="fw-bold pb-3">ABOUT US</h2>
                </div>
                <div className="col-12 d-flex flex-row justify-content-center align-items-center gap-5 pt-3">
                  <span className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                    <img
                      src={Security}
                      alt="Allowed Tenants"
                      width="60"
                      className="pb-3"
                    ></img>
                    <h4 className="fw-bold">SECURED</h4>
                  </span>
                  <span className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                    <img
                      src={Money}
                      alt="Allowed Tenants"
                      width="60"
                      className="pb-3"
                    ></img>
                    <h4 className="fw-bold">AFFORDABLE</h4>
                  </span>
                  <span className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                    <img
                      src={Wifi}
                      alt="Allowed Tenants"
                      width="60"
                      className="pb-3"
                    ></img>
                    <h4 className="fw-bold">WIFI</h4>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="col-lg-12">
              <div className="row">
                <div
                  id="parallax"
                  className="col-lg-12 align-items-center justify-content-center d-flex flex-column py-5 bg-scheme2 vh-100"
                  style={{
                    backgroundImage:
                      "url('http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg",
                  }}
                >
                  <div className="container col-xxl-12 col-xl-10 col-lg-12 col-md-12 col-sm-12 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                      <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3 text-white">
                          READY FOR NEW EXPERIENCE?
                        </h1>
                        <p className="col-lg-10 fs-4 text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </p>
                      </div>
                      <div className="col-md-10 mx-auto col-lg-5">
                        <form
                          id="inquiryForm"
                          className="p-4 p-md-5 border rounded-3 bg-light"
                        >
                          <div className="form-floating mb-3">
                            <input
                              type="email"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                              required
                            />
                            <label htmlFor="floatingInput">Email address</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="Juan Dela Cruz"
                              required
                            />
                            <label htmlFor="floatingInput">Complete name</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="floatingInput"
                              placeholder="0999 999 9999"
                              required
                            />
                            <label htmlFor="floatingInput">
                              Contact number
                            </label>
                          </div>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="inquiry"
                              style={{ height: "150px" }}
                              required
                            ></textarea>
                            <label htmlFor="inquiry">Inquiry</label>
                          </div>
                          <button
                            className="w-100 btn btn-lg btn-light mt-4"
                            type="submit"
                          >
                            Submit
                          </button>
                          <hr className="my-4" />
                          <small className="text-muted">
                            By clicking submit, you agree to the data privacy
                            act.
                          </small>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </React.Fragment>
  );
}

export default Home;
