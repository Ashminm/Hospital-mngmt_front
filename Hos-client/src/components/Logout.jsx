import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Modal, Button } from 'react-bootstrap';

function Logout() {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("role")
        sessionStorage.removeItem("token")
        navigate("/", { replace: true });
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    return (
        <>
            <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="border-2 border-blue-200 flex justify-between items-end p-3 rounded">
                    <span>
                        <h5>Account logout</h5>
                        <p className="text-slate-500">Logout your account</p>
                    </span>
                    <button className="btn btn-danger" onClick={handleShow} >
                        Logout
                    </button>
                </div>

                <div className="border-2 border-red-200 flex justify-between items-end p-3 rounded">
                    <span>
                        <h5>Account delete</h5>
                        <p className="text-slate-500">Delete your account</p>
                    </span>
                    <button className="btn btn-danger" onClick={handleShowDelete}>Delete</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Logout account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to logout?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleLogout}>
                        logout
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDelete} onHide={handleCloseDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="danger">
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Logout
