import React from 'react'
import { Modal } from 'react-bootstrap';

const Delete = (props) => {
    if (props.canDelete) {
        return (
            <>
                <hr />
                <h4 className='text-muted mb-3'>Danger Zone</h4>
                <ol className="list-group">
                    <div className="box box-border-danger">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                                <div className="fw-bold text-muted">Delete this record</div>
                                Once you delete a data, there is no going back. Please be certain.
                            </div>
                            <button className='btn btn-danger mt-1'>Delete this record</button>
                        </li>
                    </div>
                </ol>
            </>
        )
    }
}

const Update = (props) => {
    if (props.canUpdate) {
        return (
            <>
                {
                    props.formProps.map((prop, index) => (
                        Form(prop)
                    ))
                }
            </>
        )
    }
}

function Form(properties) {
    if (['text', 'number', 'email'].indexOf(properties.type)){
        return (
            <div className="form-floating mb-3">
                <input type={properties.Type} {...properties.Attributes} readOnly={true}/>
                <label htmlFor="floatingInput">{properties.Label}</label>
            </div>
        )
    }
}

function ModalForm(props) {

  return (
    <React.StrictMode>
        <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { <Update canUpdate={props.canUpdate} formProps={props.formProps}/> }
                { <Delete canDelete={props.canDelete} /> }
            </Modal.Body>
        </Modal>
    </React.StrictMode>
  )
}

export default ModalForm