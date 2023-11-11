import React from 'react'
import TodoItem from './TodoItem'

function ToDoList() {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  )
}

export default ToDoList