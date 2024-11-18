import logo from './logo.svg';
import './App.css';
import TaskHeader from './Components/TaskHeader';
import TodoContainer from './Components/TodoContainer';
import { useState } from 'react';

function App() {
  const [tasks,setTasks]=useState([])

  console.log(tasks)

  return (
    <div className="App m-0 p-0 box-border">
      <TaskHeader  setTasks={setTasks}/>
      <TodoContainer tasks={tasks}/>
    </div>
  );
}

export default App;
