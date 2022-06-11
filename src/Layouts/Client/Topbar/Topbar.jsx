import React from 'react'
import '../../../Assets/Style/Topbar.css';
import '../../../Assets/Style/Colors.css';

function Topbar() {
  return (
   <React.Fragment>
      <section className='d-flex flex-row flex-1 bg-scheme2 text-scheme1' id='topbar'>
        <div className='d-flex container flex-wrap py-2'>
          <div className='d-flex flex-column flex-1 justify-content-start align-items-start'>
            <h3>APARTMENT</h3>
          </div>
          <div className='d-flex flex-column flex-1 flex-shrink-2 justify-content-end align-items-end'>
            <div className='d-flex flex-row flex-wrap gap-4'>
              <span className='pt-1'>
                <b>Contact us:</b> +63 999 999 9999
              </span>
              <span className='pt-1'>
                <b>Email us:</b> testEmail@gmail.com
              </span>
              <button className='btn btn-light rounded-pill'>Schedule a visit</button>
            </div>
          </div>
        </div>
      </section>
   </React.Fragment>
  )
}

export default Topbar