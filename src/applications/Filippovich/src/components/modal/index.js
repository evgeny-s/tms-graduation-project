import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const mapStateToProps = state => ({
    isShowModal: state.settings.isShowModal,
});

const mapDispatchToProps = dispatch => ({
    onModalHide: () => dispatch({
        type: 'SHOW_MODAL',
        payload: false,
    })
});


function ModalMessage({isShowModal, onModalHide})
{
    return (
        <Modal show={isShowModal} onHide={onModalHide} size="sm">
            <Modal.Header closeButton>
                <Modal.Title>Warning.</Modal.Title>
            </Modal.Header>
            <Modal.Body>You must input Player name!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onModalHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage);