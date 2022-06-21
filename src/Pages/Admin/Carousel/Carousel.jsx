import React, { useState } from 'react'
import { useEffect } from 'react';

function Carousel() {
  const [images, setImages] = useState([]);
  
  const ToggleCheck= (prop) => {
    const parent = document.getElementById("cb-" + prop);
    const inputElements = parent.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked ^= 1);

    if (document.getElementById('img-' + prop).classList.contains('active-image')) {
      document.getElementById('img-' + prop).classList.remove('active-image');
    } else {
      document.getElementById('img-' + prop).classList.add('active-image');
    }
  }

  const ToggleFileDialog = () => {
    document.getElementById('upload-images').click();
  }

  useEffect(() => {
    const FetchData = async() => {
      const response = await fetch('https://my.api.mockaroo.com/imageapi.json?key=b8b25630');
      const data = await response.json();
      setImages(data);
    }
    FetchData();
  }, []);

  return (
    <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Home
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <span className='text-primary'>Carousel</span>
            </li>
          </ol>
        </nav>
        <section className='row'>
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title">Carousel</h6>
                <p className="text-muted mb-3"><code>Featured image in website.</code></p>
                <div className='row col-12'>
                  <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                    <p className="text-muted mb-3"><code>Stored images.</code></p>
                    <div className='row col-12'>
                      <div className="col-12 form-inline d-flex gap-2 justify-content-end align-items-end">
                        <button className='btn btn-primary btn-sm float-end mb-3' onClick={() => ToggleFileDialog()}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                          <span className='px-2'>Upload</span>
                          <input id='upload-images' type="file" multiple hidden></input>
                        </button>
                        <div className="btn-group">
                          <button type="button" className="btn btn-primary dropdown-toggle btn-sm mb-3" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            <span className='px-2'>Action</span>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <h6 className="dropdown-header">Operations</h6>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                <span className='px-2'>Modify</span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <span className='px-2'>Set as featured</span>
                              </a>
                            </li>
                            <li>
                              <h6 className="dropdown-header text-danger">Danger Zone</h6>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                <span className='px-2'>Delete selected</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div id='gallery' className='col-12 row'>
                      {
                        images.map((x) => {
                          return(
                            <div id={"img-" + x.id} key={x.id} className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                              <a href="#" onClick={(e) => ToggleCheck(x.id)}>
                                <div id='image-gallery' className="card bg-light text-white">
                                  <img className="card-img" height="150px" alt="100%x270" src={x.source} data-holder-rendered="true" loading="lazy"/>
                                  <div id={"cb-" + x.id} className="overlay float-end">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                  </div>
                                </div>
                              </a>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>

                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                    <p className="text-muted mb-3"><code>Preview.</code></p>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators d-none">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

                          <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

                          <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

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
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default Carousel