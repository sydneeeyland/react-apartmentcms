import React from 'react'
import Aside from '../../../Components/Sidebar';

function Sidebar() {
  return (
    <React.Fragment>
        <div className='container-fluid'>
          <div className='w-100'>
            <div className='sidebar-title px-3'>Menu</div>
            <ul className='d-flex flex-column flex-wrap gap-2 list-unstyled'>
              <Aside title={"asdasdasd"} to={"/discover"} icon={'M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z'}></Aside>
              <li>
                <a href='/dashboard/discover' className='btn btn-default side-active' id='side-link'>
                  <div className='row'>
                    <div className='col-1'>
                      <button className='btn btn-primary btn-sm rounded-pill'>
                        <svg className='pb-1' width="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className='col-10 px-3 pt-1'>
                      <span>Discover</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href='/' className='btn btn-default' id='side-link'>
                  <div className='row'>
                    <div className='col-1'>
                      <button className='btn btn-primary btn-sm rounded-pill'>
                        <svg className='pb-1' width="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className='col-10 px-3 pt-1'>
                      <span>Discover</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href='/' className='btn btn-default' id='side-link'>
                  <div className='row'>
                    <div className='col-1'>
                      <button className='btn btn-primary btn-sm rounded-pill'>
                        <svg className='pb-1' width="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className='col-10 px-3 pt-1'>
                      <span>Discover</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Sidebar