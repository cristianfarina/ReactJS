import React from 'react'

function TodoItem({task}) {
  return (
    <li>
      <p>{task}</p>
      <button>Completar</button>
      <button>Eliminar</button>
    </li>
  )
}

export default TodoItem