import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState([])


  const addTask = (newTask) => {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList tasks={tasks} />
        <input type="text" placeholder="Nueva tarea" />
        <button onClick={() => addTask("Nueva tarea")}>Agregar tarea</button>
      </div>
    );  

  }

  const completeTask = (index) => {

  }

  constdeleteTask = (index) => {

  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={tasks} />
      
    </div>
  );
}

export default App;
