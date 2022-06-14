import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function Modal2(props) {
    const test = props.canDelete ? 'working': 'no';
  return (
    <React.StrictMode>
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn btn-danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </React.StrictMode>
  )
}

export default Modal2