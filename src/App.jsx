import React, { useEffect, useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  const[searchString, setSearchString] = useState('')
  const[tasks, setTasks] = useState([])
  const[currentTasks, setCurrentTasks] = useState([])
  const addTasks = (newTasks) =>{
    setTasks([...tasks, newTasks])
  }

  const deleteTask = (taskTitle) => {
    setTasks(tasks.filter(task => task.title != taskTitle));
  }

  useEffect(() =>{
    setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, tasks])

  const handleChangeSearchString = (e) => {
    setSearchString(e.target.value)
  }

  return (
    <>
    <div className='app-background'>
      <div className='title-task-h1 box'>
          <h1>To Do List</h1>
          <form className='search-task'>
            <label htmlFor="">Buscar tarea</label>
            <input 
            type="text"
            onChange={handleChangeSearchString}
            value={searchString}/>
          </form>
          <TaskForm addTask={addTasks}/>
        </div>
      <TaskList tasks={currentTasks} deleteTask={deleteTask}/>
    </div>
    </>
  )
}

export default App
