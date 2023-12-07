import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import "./TaskList.css"

const TaskList = ({tasks, deleteTask}) => {
    return (
        <div className='task-list-background box'>
            {
            tasks.length === 0 
            ?
            <h2 className='title-task'>No hay lista de tareas</h2>
            :
            <div>
                {
                tasks.map(task =>(
                    <TaskItem task={task} deleteTask={deleteTask}/>
                ))             
                }
            </div>
            }
        </div>
    )
}

export default TaskList