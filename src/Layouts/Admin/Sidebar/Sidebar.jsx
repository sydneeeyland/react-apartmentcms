import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <React.Fragment>
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className="nav-item nav-category">MAIN</li>
        <li className='nav-item'>
          <NavLink to='/admin/dashboard' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box link-icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            <span className='nav-title'>Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item nav-category">WEB APPS</li>
        <li className='nav-item'>
          <NavLink to='/admin/inquiry' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail link-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span className='nav-title'>Inqueries</span>
          </NavLink>
        </li>
        <li className="nav-item nav-category">PAGE BUILDER</li>
        <li className='nav-item'>
          <NavLink to='/admin/carousel' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <span className='nav-title'>Carousel</span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/admin/properties' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span className='nav-title'>Properties</span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/admin/floorplan' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            <span className='nav-title'>Floor plan</span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/admin/aboutus' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <span className='nav-title'>About us</span>
          </NavLink>
        </li>
      </ul>

    </React.Fragment>
  );
}

export default Sidebar