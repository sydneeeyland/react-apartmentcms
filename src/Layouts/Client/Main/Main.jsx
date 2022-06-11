import React from "react";
import Topbar from "../Topbar/Topbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <nav className="d-flex flex-row flex-wrap">
        <div className="d-flex flex-colum w-100">
          <Topbar />
        </div>
        <div className="d-flex flex-colum w-100">
          <Header />
        </div>
      </nav>

      <section className="container-fluid">
        <main className="row">
          <div className="col-12">
            <Outlet />
          </div>
          <footer className="col-12 pt-3">
            <Footer />
          </footer>
        </main>
      </section>
    </React.Fragment>
  );
}

export default Main;
