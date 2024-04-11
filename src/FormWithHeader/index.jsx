import React, { useState } from 'react'
import './index.css';


function generateUniqueId() {
    return Math.floor(Math.random() * 100);
}

export default function TodoForm(props) {
    const { allTodos, setAllTodos } = props;
    const [newTodo, setNewTodo] = useState({
        name: '',
        description: '',
        status: 'notCompleted'
    })
    const [showEmptyError, setShowEmptyError] = useState(false);

    function addTodo() {
        if (newTodo.name !== "" && newTodo.description !== "") {
            setShowEmptyError(false);
            let obj = {
                ...newTodo,
                id: generateUniqueId(),
            }
            setAllTodos([...allTodos, obj])
            setNewTodo({
                name: '',
                description: '',
                status: 'notCompleted'
            })
        } else {
            setShowEmptyError(true);
        }
    }

    return (
        <div className='todo-form d-flex align-items-center flex-column w-100 mt-3' >
            <h2 style={{ fontWeight: 800, color: "#247324" }} >------ MY TODO ------</h2>
            <section className='w-100 p-3' >
                <div className='row w-100 d-flex flex-column align-items-center justify-content-center' >
                    <div className='col-md-4 col-lg-4 col-sm-12'  >
                        <div className='d-flex align-items-center justify-content-between' >
                            <label className='label' >Your Name: </label>
                            <input className='input-fields'
                                placeholder='Enter your name'
                                onChange={(event) => setNewTodo({ ...newTodo, name: event.target.value })}
                                value={newTodo.name}
                            />
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-4' >
                            <label className='label' >Description: </label>
                            <input className='input-fields'
                                placeholder='Enter your description'
                                onChange={(event) => setNewTodo({ ...newTodo, description: event.target.value })}
                                value={newTodo.description}
                            />
                        </div>
                        {showEmptyError && <div style={{ fontSize: "12px", fontWeight: 800, color: "red" }} >All fields must be filed...</div>}
                        <button onClick={addTodo} className='add-btn mt-4' >ADD TODO</button>
                    </div>
                </div>
            </section>
        </div>
    )
}