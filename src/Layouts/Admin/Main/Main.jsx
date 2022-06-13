import React, { createContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "../../../Assets/Style/Sidebar.css";
import '../../../Assets/Style/Content.css';

function Main() {
  return (
    <React.Fragment>
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <Header />
      </header>

      <section>
        <div className="d-flex flex-row flex-wrap p-0 m-0">
          <aside id="sidebar" className="d-flex flex-column flex-wrap h-100 overflow-auto">
            <div className="container-fluid">
              <Sidebar />
            </div>
          </aside>
          <main className="container-fluid">
            <div  className="d-flex flex-column flex-wrap">
              <div id="content" className="container-fluid">
                asdasd
              </div>
            </div>
          </main>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Main;
