import React from "react";
import { NavLink } from "react-router-dom";
import "../../../Assets/Style/Colors.css";
import "../../../Assets/Style/Header.css";
import '../../../Assets/Style/Site.css'

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
      <section className="bg-scheme1 container fixed-top mt-10 shadow-sm rounded" id="header">
        <div className="container py-3" id="navigation">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            <div className="container-fluid">
              <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="50"/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav">
                  <li>
                    <NavLink to='/home' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>ABOUT</NavLink>
                  </li>
                  <li>
                    <NavLink to='/apartments' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>APARTMENTS</NavLink>
                  </li>
                  <li>
                    <NavLink to='/test' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>TEST</NavLink>
                  </li>
                  <li>
                    <NavLink to='/test2' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>TEST</NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>CONTACT</NavLink>
                  </li>
                  <li>
                    <NavLink to='/test3' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>TEST</NavLink>
                  </li>
                  <li>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? "text-decoration-none activelink" : "")}>LOGIN</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
