import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const PopupModal = (prop) => {
    return (
        <Modal show={prop.show} size="xl" onHide={prop.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>{prop.content.title}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {console.log(prop.content.fileExt.toString())}
                {prop.content.fileExt === 'jpg' ?
                    <img src={prop.content.url} alt="donation_instruction"/> :
                    <object aria-label={prop.content.title} title={prop.content.title} data={prop.content.url} width="100%" height="100%"/>}
            </Modal.Body>
            {console.log(prop.content.confirm)}
            {prop.content.confirm !== undefined && prop.content.confirm !== "" ?
                <Modal.Footer>
                    <Button href={prop.content.confirm} bsPrefix="crose-btn" >OK</Button>
                </Modal.Footer>
                : null}
        </Modal>
    );
};
export default PopupModal;