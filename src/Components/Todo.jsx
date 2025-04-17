import React, { useState } from 'react'
import '../Components/Todo.css'

const Todo = () => {

  const [tasks, setTasks] = useState([])
  const [newtask, setNewTask] = useState("")
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null)

  function handleChange(event) {
    setNewTask(event.target.value)
  }

  function addTasks() {

    if (newtask.trim() !== "") {
      if (currentTaskIndex === null) {
        setTasks([...tasks, newtask])
      } else {
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? newtask : task
        )
        setTasks(updatedTasks)
        setCurrentTaskIndex(null)
      }
      setNewTask("")
    }

  }

  function editTask(index) {
    setNewTask(tasks[index])
    setCurrentTaskIndex(index)
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="toDoList">
      <h1>TO-DO List</h1>

      <div className='main'>
        <input
          type="text"
          placeholder='Enter the task'
          value={newtask}
          onChange={handleChange}
        />
        <button
          className="addBtn"
          onClick={addTasks}
        >
          {currentTaskIndex === null ? "Add" : "Update"}
        </button>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <div className="Btns">
              <button
                className='editBtn'
                onClick={() => editTask(index)}
              >Edit</button>
              <button
                className='deleteBtn'
                onClick={() => deleteTask(index)}
              >Delete</button>
            </div>
          </li>
        )}
      </ol>

    </div>
  )
}

export default Todo
