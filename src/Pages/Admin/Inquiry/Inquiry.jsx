import React, { useEffect, useState } from 'react'
import Modal from '../../../Components/Modal';

function Inquiry() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log(modalShow);
  });

  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item" aria-current="page">Library</li>
        </ol>
      </nav>
      <section className='row'>
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Bordered table</h6>
              <p className="text-muted mb-3">Add class <code>.table-bordered</code></p>
              <div className="table-responsive pt-3">
                <table className="table table-bordered">
                  <thead className='text-center'>
                    <tr>
                      <th>Email</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Inquiry</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr>
                      <td>Cedric Kelly</td>
                      <td>$206,850</td>
                      <td>June 21, 2022</td>
                      <td>March 22, 2022</td>
                      <td>
                        <button className="btn btn-light btn-sm" id="dropdownMenuClickableInside" onClick={() => setModalShow(true)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Haley Kennedy</td>
                      <td>$313,500</td>
                      <td>May 15, 2022</td>
                      <td>March 22, 2022</td>
                    </tr>
                    <tr>
                      <td>Bradley Greer</td>
                      <td>$132,000</td>
                      <td>Apr 12, 2022</td>
                      <td>March 22, 2022</td>
                    </tr>
                    <tr>
                      <td>Brenden Wagner</td>
                      <td>$206,850</td>
                      <td>June 21, 2022</td>
                      <td>March 22, 2022</td>
                    </tr>
                    <tr>
                      <td>Bruno Nash</td>
                      <td>$163,500</td>
                      <td>January 01, 2022</td>
                      <td>March 22, 2022</td>
                    </tr>
                    <tr>
                      <td>Sonya Frost</td>
                      <td>$103,600</td>
                      <td>July 18, 2022</td>
                      <td>March 22, 2022</td>
                    </tr>
                    <tr>
                      <td>Zenaida Frank</td>
                      <td>$313,500</td>
                      <td>March 22, 2022</td>
                      <td>March 22, 2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={modalShow} onHide={() => setModalShow(!modalShow)} title={"Modify"} canDelete={true} />

    </React.Fragment>
  )
}

export default Inquiry