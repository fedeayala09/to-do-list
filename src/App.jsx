import React, { useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  const[task, setTask] = useState(0)
  const addTask = (newTask) =>{
    setTask([...task, newTask])
  }
  console.log(task);

  return (
    <>
    <div className='title'>
      <h1>To Do List</h1>
    </div>
    <TaskForm addTask={addTask}/>
    <TaskList/>
    </>
  )
}

export default App
