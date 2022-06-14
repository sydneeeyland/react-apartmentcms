import React, { createContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "../../../Assets/Style/Sidebar.css";
import '../../../Assets/Style/Content.css';

function Main() {
  return (
    <React.Fragment>
      <section className="main-wrapper">

        <nav id="sidebar" className="d-flex flex-column flex-shrink-0 p-3">
          <div className="logo d-flex justify-content-between">
            <a href="#" className="sidebar-brand text-decoration-none">
              APARTMENT<span></span>
            </a>
            <div id="sidebar-toggle" className="sidebar-toggler not-active"></div>
          </div>
          <Sidebar />
        </nav>

        <main className="page-wrapper">
          <nav className="page-nav"><a href="#" className="sidebar-toggler">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
				</a></nav>
          <div className="page-content">
            <Outlet />
          </div>
          
        </main>
        
      </section>
    </React.Fragment>
  );
}

export default Main;
