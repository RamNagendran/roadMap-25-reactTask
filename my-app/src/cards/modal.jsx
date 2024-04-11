import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './index.css';

export default function EditDeleteModal(props) {
    const { showModal, setShowModal, selectedTodo, setSelectedTodo, handleEdit, handleDelete } = props;
    const { id, name, description, status } = selectedTodo;


    return (
        <Modal className='modal-style' show={showModal.edit || showModal.delete} onHide={() => setShowModal({ edit: false, delete: false })}>
            <Modal.Header closeButton>
                <Modal.Title>{showModal.edit ? "Edit Todo" : "Delete Todo"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showModal.edit ? <div className='d-flex flex-column align-items-center w-100'>
                    <div className='d-flex align-items-center justify-content-between w-100' >
                        <label className='label' >Your Name: </label>
                        <input className='input-fields'
                            placeholder='Enter your name'
                            onChange={(event) => setSelectedTodo({ ...selectedTodo, name: event.target.value })}
                            value={name}
                        />
                    </div>
                    <div className='d-flex align-items-center justify-content-between mt-4 w-100' >
                        <label className='label' >Description: </label>
                        <input className='input-fields'
                            placeholder='Enter your description'
                            onChange={(event) => setSelectedTodo({ ...selectedTodo, description: event.target.value })}
                            value={description}
                        />
                    </div>
                    <div className='d-flex align-items-center justify-content-between mt-4 w-100' >
                        <label className='label' >Status: </label>
                        <Dropdown onSelect={(e) => setSelectedTodo({ ...selectedTodo, status: e })} >
                            <Dropdown.Toggle
                                variant={status === "completed" ? "success" : "danger"}
                                id="dropdown-basic">
                                {status}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="completed" >Completed</Dropdown.Item>
                                <Dropdown.Item eventKey="notCompleted" >Not Completed</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                    : <div >
                        Are you sure you want to delete this <b>"{name}"</b> Todo?
                    </div>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal({ edit: false, delete: false })}>
                    Close
                </Button>
                <Button onClick={() => showModal.edit ? handleEdit() : handleDelete()} variant="primary" style={{ backgroundColor: showModal.edit ? "#16165c" : "red", color: "#fff" }} >
                    {showModal.edit ? "Save Changes" : "Confirm"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}