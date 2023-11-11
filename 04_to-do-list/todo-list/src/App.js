import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {

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
