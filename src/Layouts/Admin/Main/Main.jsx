import React, { createContext } from 'react'
import { Outlet } from "react-router-dom";

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../../Assets/Style/Sidebar.css';

function Main() {
  return (
    <React.Fragment>
        {/* <header className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
          <Header />
        </header>

        <section className='container-fluid'>
          <div className='row'>
            <aside id='sidebar' className='h-100 bg-light pt-4'>
              <Sidebar />
            </aside>
          </div>
        </section>

        <div className='container'>
              <Outlet />
        </div> */}

        


    </React.Fragment>
  )
}

export default Main