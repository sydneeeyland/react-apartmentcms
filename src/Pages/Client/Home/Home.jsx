import React from 'react';
import '../../../Assets/Style/Home.css';
import { Link } from 'react-router-dom';
import { Bed, Room, Kitchen, Closet, Aircon, Bathroom, Pax, Wifi, Building, Security, Money, FloorPlan } from '../../../Assets';

function Home() {
  return (
    <React.Fragment>
      <section>
        <div className='container-fluid'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/45965399221413.5eede0c8565af.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/d6/8a/7f/d68a7f4d07f6c4b841b86505ae0e33f4.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <main>
          <div className='container-fluid'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-12 align-items-center justify-content-center d-flex flex-column py-5 bg-scheme1'>
                  <img src={Building} alt="Room" className="me-3" width="50"></img>
                  <h2 className='fw-bold pb-3 pt-2'>FEATURED <span>PROPERTIES</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container pt-1'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-lg-12 pb-4'>
                  <div className='card featured-card shadow-sm' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/56369862e4b0e778f327581a/1625134276720-BYE9BENJQYTPMUMY2PZT/2021-23+Riverside+Micro.02.jpg?format=1500w')"}}>
                    <div className='card-body'>
                      <div className='d-flex flex-wrap flex-column justify-content-end align-items-center h-100'>
                        <div className='d-flex flex-wrap featured-headerpt-5'>
                          <h1 className='text-white fw-bold'>Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className='d-flex flex-wrap featured-details'>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Room} alt="Room" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Bed} alt="Bed" className="me-3" width="20"></img>
                            2
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Aircon} alt="Closet" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Kitchen} alt="Kitchen" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Bathroom} alt="Bathroom" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Closet} alt="Closet" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Pax} alt="Allowed Tenants" className="me-3" width="20"></img>
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 pb-4'>
                  <div className='card featured-card shadow-sm' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/56369862e4b0e778f327581a/1625134276720-BYE9BENJQYTPMUMY2PZT/2021-23+Riverside+Micro.02.jpg?format=1500w')"}}>
                    <div className='card-body'>
                      <div className='d-flex flex-wrap flex-column justify-content-end align-items-center h-100'>
                        <div className='d-flex flex-wrap featured-headerpt-5'>
                          <h1 className='text-white fw-bold'>Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className='d-flex flex-wrap featured-details'>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Room} alt="Room" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Bed} alt="Bed" className="me-3" width="20"></img>
                            2
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Aircon} alt="Closet" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Kitchen} alt="Kitchen" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Bathroom} alt="Bathroom" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Closet} alt="Closet" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Pax} alt="Allowed Tenants" className="me-3" width="20"></img>
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 pb-4'>
                  <div className='card featured-card shadow-sm' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/56369862e4b0e778f327581a/1625134276720-BYE9BENJQYTPMUMY2PZT/2021-23+Riverside+Micro.02.jpg?format=1500w')"}}>
                    <div className='card-body'>
                      <div className='d-flex flex-wrap flex-column justify-content-end align-items-center h-100'>
                        <div className='d-flex flex-wrap featured-header pt-5'>
                          <h1 className='text-white fw-bold'>Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className='d-flex flex-wrap featured-details'>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Room} alt="Room" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Bed} alt="Bed" className="me-3" width="20"></img>
                            2
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Aircon} alt="Closet" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Kitchen} alt="Kitchen" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Bathroom} alt="Bathroom" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Closet} alt="Closet" className="me-3" width="20"></img>
                            1
                          </button>
                          <button className='btn btn-light m-3 rounded-pill'>
                            <img src={Pax} alt="Allowed Tenants" className="me-3" width="20"></img>
                            1
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pb-4'>
                  <div className='d-flex flex-wrap flex-column justify-content-end align-items-center h-100'>
                    <Link to='/apartment' className='btn btn-light w-50 fw-bold px-3 py-3 fs-5 rounded-pill'>SEE MORE ....</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src={FloorPlan} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
              <div class="col-lg-6 text-center">
                <h1 class="display-5 fw-bold lh-1 mb-3">FLOOR PLAN</h1>
                <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
          <section className='container-fluid' >
            <div className='col-lg-12'>
              <div className='row bg-scheme1 py-5'>
                <div id='about-header' className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
                  <h2 className='fw-bold pb-3'>ABOUT US</h2>
                </div>
                <div className='col-12 d-flex flex-row justify-content-center align-items-center gap-5 pt-3'>
                  <span className='d-flex flex-column flex-wrap justify-content-center align-items-center'>
                    <img src={Security} alt="Allowed Tenants" width="60" className='pb-3'></img>
                    <h4 className='fw-bold'>SECURED</h4>
                  </span>
                  <span className='d-flex flex-column flex-wrap justify-content-center align-items-center'>
                    <img src={Money} alt="Allowed Tenants" width="60" className='pb-3'></img>
                    <h4 className='fw-bold'>AFFORDABLE</h4>
                  </span>
                  <span className='d-flex flex-column flex-wrap justify-content-center align-items-center'>
                    <img src={Wifi} alt="Allowed Tenants" width="60" className='pb-3'></img>
                    <h4 className='fw-bold'>WIFI</h4>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className='container-fluid' >
            <div className='col-lg-12'>
              <div className='row'>
                <div id='parallax' className='col-lg-12 align-items-center justify-content-center d-flex flex-column py-5 bg-scheme2 vh-100' style={{backgroundImage: "url('http://cdn.home-designing.com/wp-content/uploads/2014/06/marble-finish-room-divider.jpeg"}}>
                  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div class="row align-items-center g-lg-5 py-5">
                      <div class="col-lg-7 text-center text-lg-start">
                        <h1 class="display-4 fw-bold lh-1 mb-3 text-white">READY FOR NEW EXPERIENCE?</h1>
                        <p class="col-lg-10 fs-4 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                      <div class="col-md-10 mx-auto col-lg-5">
                        <form class="p-4 p-md-5 border rounded-3 bg-light">
                          <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                            <label for="floatingInput">Email address</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Juan Dela Cruz" required/>
                            <label for="floatingInput">Complete name</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="0999 999 9999" required/>
                            <label for="floatingInput">Contact number</label>
                          </div>
                          <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="inquiry" style={{height: "150px"}} required></textarea>
                            <label for="inquiry">Inquiry</label>
                          </div>
                          <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Submit</button>
                          <hr class="my-4" />
                          <small class="text-muted">By clicking submit, you agree to the data privacy act.</small>
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
  )
}

export default Home