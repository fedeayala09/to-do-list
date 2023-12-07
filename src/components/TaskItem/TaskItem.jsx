import React from 'react'
import './TaskItem.css'
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";



const TaskItem = ({task, deleteTask}) => {
    return (
        <div className='task-item-background'>
            <h3>{task.title}</h3>
            <div className='option-task-btn'>
                <MdDeleteForever className='btn-option delete' onClick={() => deleteTask(task.title)}/>
                <FaCheck className='btn-option check'/>
            </div>
        </div>
    )
}

export default TaskItem