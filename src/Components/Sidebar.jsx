import React from 'react'

function Sidebar(props) {
  return (
    <React.Fragment>
        <li>
            <a href={props.to} className='btn btn-default side-active' id='side-link'>
                <div className='row'>
                    <div className='col-1'>
                        <button className='btn btn-primary btn-sm rounded-pill'>
                            <svg className='pb-1' width="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d={props.icon}></path>
                            </svg>
                        </button>
                    </div>
                    <div className='col-10 px-3 pt-1'>
                        <span>{props.title}</span>
                    </div>
                </div>
            </a>
        </li>
    </React.Fragment>
  )
}

export default Sidebar