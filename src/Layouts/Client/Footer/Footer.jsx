import React from "react";
import { Facebook, Twitter, Instagram } from "../../../Assets";

function Footer() {
  return (
    <React.Fragment>
      <div className="container">
        <footer className="py-3">
          <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12">
              <h5>Navigation</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Apartments
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12">
              <h5>Navigation</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Test
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Test
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12">
              <h5>Navigation</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Test
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly email of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-light" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2022 Apartment, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <img
                  src={Twitter}
                  alt="Allowed Tenants"
                  width="30"
                  className="pb-3"
                ></img>
              </li>
              <li className="ms-3">
                <img
                  src={Facebook}
                  alt="Allowed Tenants"
                  width="30"
                  className="pb-3"
                ></img>
              </li>
              <li className="ms-3">
                <img
                  src={Instagram}
                  alt="Allowed Tenants"
                  width="30"
                  className="pb-3"
                ></img>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;
