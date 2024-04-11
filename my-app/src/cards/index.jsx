import Card from 'react-bootstrap/Card';
import './index.css';
import EditDeleteModal from './modal';
import { useEffect, useState } from 'react';

export default function TodoCards(props) {
    const { allTodos, setAllTodos } = props;
    const [selectedTodo, setSelectedTodo] = useState({
        id: '',
        name: '',
        description: '',
        status: ''
    });
    const [showModal, setShowModal] = useState({
        edit: false,
        delete: false,
    });

    function handleEdit() {
        const result = allTodos && allTodos?.length > 0 && allTodos?.map((items) => {
            if (parseInt(items.id) === parseInt(selectedTodo.id)) {
                return selectedTodo
            } else {
                return items
            }
        })
        setAllTodos(result);
        setShowModal({
            edit: false,
            delete: false,
        })
    }
    
    function handleDelete() {
        const filteredTodos = allTodos?.filter((items) => parseInt(items.id) !== parseInt(selectedTodo.id))
        setAllTodos(filteredTodos)
        setShowModal({
            edit: false,
            delete: false,
        })
    }

    return (
        <div className="cards-container container-fluid d-flex justify-content-center" >
            <div className='row w-100' >
                {allTodos && allTodos.length > 0 && allTodos.map((items, index) => {
                    return <div className='col-lg-4 col-md-4 col-sm-12'>
                        <Card className='cards-manual-styles' >
                            <Card.Body className='d-flex flex-column justify-content-between' style={{ padding: "5px" }}>
                                <Card.Title>
                                    <span className='title-label' >Name: </span>
                                    <span className='title-content' >{items?.name}</span>
                                </Card.Title>
                                <Card.Text>
                                    <span className='title-label' >Description: </span>
                                    <span className='title-content' >{items?.description}</span>
                                </Card.Text>
                                <Card.Text>
                                    <span className='title-label' >Status: </span>
                                    <span style={{ color: items.status === "notCompleted" ? "red" : "green" }} className='title-content' >{items?.status}</span>
                                </Card.Text>
                                <Card.Footer className='d-flex align-items-center justify-content-between' style={{ padding: "5px" }}  >
                                    <button onClick={() => { setSelectedTodo(items); setShowModal({ edit: true, delete: false }) }} className='actions-styles' >Edit</button>
                                    <button onClick={() => { setSelectedTodo(items); setShowModal({ edit: false, delete: true }) }} className='actions-styles' >Delete</button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div>
            <EditDeleteModal
                showModal={showModal}
                setShowModal={setShowModal}
                selectedTodo={selectedTodo}
                setSelectedTodo={setSelectedTodo}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
} 