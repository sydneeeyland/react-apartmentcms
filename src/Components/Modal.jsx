import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const Delete = (props) => {
    if (props.canDelete) {
        return (
            <>
                <hr />
                <h4 className='text-muted mb-3'>Danger Zone</h4>
                <ol class="list-group" style={{borderStyle: "1px solid", borderColor: "red"}}>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="me-auto">
                            <div class="fw-bold text-muted">Delete this record</div>
                            Once you delete a data, there is no going back. Please be certain.
                        </div>
                        <button className='btn btn-danger mt-1'>Delete this record</button>
                    </li>
                </ol>
            </>
        )
    }
}

function ModalForm(props) {
    const test = props.canDelete ? 'working': 'no';

  return (
    <React.StrictMode>
        <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                {
                    <Delete canDelete={true} />
                }
            </Modal.Body>
        </Modal>
    </React.StrictMode>
  )
}

export default ModalForm