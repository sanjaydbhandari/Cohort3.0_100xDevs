import logo from './logo.svg';
import './App.css';
import TaskHeader from './Components/TaskHeader';
import TodoContainer from './Components/TodoContainer';

function App() {
  return (
    <div className="App m-0 p-0 box-border">
      <TaskHeader/>
      <TodoContainer />
    </div>
  );
}

export default App;
