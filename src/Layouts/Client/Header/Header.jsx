import React from "react";
import { Link } from "react-router-dom";
import "../../../Assets/Style/Colors.css";
import "../../../Assets/Style/Header.css";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").classList.remove("mt-10");
    document.getElementById("header").classList.remove("container", 1000);
  } else {
    document.getElementById("header").classList.add("mt-10");
    document.getElementById("header").classList.add("container", 1000);
  }
}

function Header() {
  return (
    <React.Fragment>
      <section
        className="d-flex flex-wrap bg-scheme1 container fixed-top mt-10 shadow-sm rounded"
        id="header"
      >
        <div
          className="d-flex flex-row flex-wrap gap-5 align-items-center container py-3"
          id="navigation"
        >
          <div className="text-center">
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="logo"
              width="50"
            />
          </div>
          <nav>
            <ul className="d-flex flex-row flex-wrap list-unstyled pt-3">
              <li>
                <Link to="/home" className="text-decoration-none activelink">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-decoration-none">
                  APARTMENTS
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-decoration-none">
                  TEST
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-decoration-none">
                  TEST
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to="/pages" className="text-decoration-none">
                  TEST
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
