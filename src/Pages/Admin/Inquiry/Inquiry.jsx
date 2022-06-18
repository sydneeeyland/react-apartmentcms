import React, { useEffect, useState, useMemo } from 'react'
import Modal from '../../../Components/Modal';
import ReactPaginate from 'react-paginate';
import '../../../Assets/Style/Table.css';

function Inquiry() {
  let PageSize = 25;

  const [modalShow, setModalShow] = useState(false);
  const formProperties = [{"Label":"Email address","Type":"email","Attributes":{"Id":"txt-email","Class":"form-control","Placeholder":"name@example.com","Required":""}},{"Label":"Complete name","Type":"text","Attributes":{"Id":"txt-name","Class":"form-control","Placeholder":"Jane Doe","Required":""}},{"Label":"Contact number","Type":"number","Attributes":{"Id":"txt-number","Class":"form-control","Placeholder":"0939641135","Required":""}},{"Label":"Inquiry","Type":"textarea","Attributes":{"Id":"txt-inquiry","Class":"form-control","Placeholder":"inquiry","Required":""}}]
  
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch (`https://jsonplaceholder.typicode.com/comments?page=1&_limit=${PageSize}`);
      const data = await response.json();
      const total = response.headers.get('x-total-count');
      setPageCount(Math.ceil(total / PageSize));
      setItems(data);
    };

    FetchData();
  }, [PageSize]);

  const FetchDataPaginate = async (currentPage) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${PageSize}`);
    const data = await response.json();
    return data;
  }

  const FilterData = async(filterValue) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${filterValue}`);
    const data = await response.json();
    return data;
  }

  const HandleChange = async (e) => {
    setItems(await FilterData(e));
  }

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const dataFromAPI = await FetchDataPaginate(currentPage);
    setItems(dataFromAPI);
  }

  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            Home
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <span className='text-primary'>Inquiry</span>
          </li>
        </ol>
      </nav>
      <section className='row'>
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Inquiry list</h6>
              <p className="text-muted mb-3">Modify or <code>delete record.</code></p>
              <div className="table-responsive pt-3">
                <div id="search-box" className='d-flex flex-row flex-wrap flex-1 justify-content-end align-items-end mb-2'>
                  <div className='col-2'>
                    <input type='text' className='form-control' placeholder='Enter keywords ...' onBlur={e => HandleChange(e.target.value)}></input>
                  </div>
                  <div className='px-2'>
                    <button className='btn btn-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      <span className='px-1'>Search</span>
                    </button>
                  </div>
                </div>
                <table className="table">
                  <thead className='text-muted'>
                    <tr>
                      <th className='text-center'>
                        <input type='checkbox' className='form-check-input' value="0"></input>
                      </th>
                      <th width='20%'>NAME</th>
                      <th width='20%'>EMAIL</th>
                      <th width='20%'>CONTACT</th>
                      <th width='30%'>INQUIRY</th>
                      <th width='5%'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      items.map((x) => {
                        return (
                          <tr className='table-row'>
                            <td>
                              <div className='text-center'>
                                <input type='checkbox' className='form-check-input' value={x.id}></input>
                              </div>
                            </td>
                            <td>
                              <span>{x.name}</span>
                            </td>
                            <td>
                              <span>{x.email}</span>
                            </td>
                            <td>
                              <span>{x.contact}</span>
                            </td>
                            <td>{x.inquiry}</td>
                            <td>
                              <button className="btn btn-light btn-sm" id="dropdownMenuClickableInside" onClick={() => setModalShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                                  <circle cx="12" cy="12" r="3"></circle>
                                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                              </button>
                            </td>
                        </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                <div className="d-flex flex-stack flex-wrap pt-2">
                  <div className='text-muted pb-3'></div>
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination gap-2"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link rounded"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                  />
								</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={modalShow} onHide={() => setModalShow(!modalShow)} title={"Modify"} canDelete={true} canUpdate={true} formProps={formProperties} />
    </React.Fragment>
  )
}

export default Inquiry