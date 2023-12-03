import React, { useState } from 'react'
import './TaskForm.css'


const TaskForm = ({ addTask }) => {
    const[openModal, setOpenModal] = useState(false);

    const handleOpenNewTaskModal = () => {
        setOpenModal(true);
    }

    const handleCloseNewTaskModal = () => {
        setOpenModal(false);
    }

    const handleAddNewTask = (e) => {
        console.log("entro");
        e.preventDefault();
        const {title} = e.target;
        if(title){
            addTask({title: title.value});
        }
        handleCloseNewTaskModal();
    }


    return (
        <div>
            <button onClick={handleOpenNewTaskModal}>Nueva Tarea</button>
            {openModal && <div className='modal-background'>
            <div className='modal'>
                <h2>agregar nueva tarea</h2>
                <form onSubmit={handleAddNewTask}>
                    <div className='form-input-title'>
                        <input  type="text" placeholder='Nueva tarea' id='title' name='title'/>
                    </div>
                    <div className='form-button'>
                        <button type='submit'>Agregar</button>
                        <button onClick={handleCloseNewTaskModal}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>}
        </div>
    )
}

export default TaskForm