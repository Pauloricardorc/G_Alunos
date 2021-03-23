import { useLoading } from '@agney/react-loading';
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import './style.css'

function  ModalConfirm() {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        loaderProps: {
            valueText: 'Fetching video from the Great Internet',
          },
      });

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return(
        <div className="Container_confirm">
            <modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                className="Modal_Container"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="titulo_modal">Confirmando...</Modal.Title>
                </Modal.Header>
                <Modal.Body className="main_modal">
                    <div {...containerProps}>
                        <section {...containerProps}>{indicatorEl}</section>
                    </div>
                </Modal.Body>
            </modal>
        </div>
    )
}

export default ModalConfirm