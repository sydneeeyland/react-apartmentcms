import React from 'react'
import { NotificationBell } from '../../../Assets';

function Header() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className='px-2'>
          <img className='' src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="50"/>
        </div>
        <div className='px-4'>
          <button type="button" className="btn btn-light btn-sm position-relative rounded-pill">
            <img src={NotificationBell} alt="logo" width="20"/>
            <span className="position-absolute top-20 start-120 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header