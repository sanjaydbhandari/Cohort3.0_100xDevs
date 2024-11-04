import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    console.log(todos)
  },[todos])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(todo !== ''){
      await setTodos([...todos,{id:`${Date.now()}`,todo}])
    }
    setTodo("")
  }

  const handleEdit= () =>{

  }

  const handleDelete = () => {
    
  }

  return (
    <>
      <div className="todo-container">
        <h1>My Todo App</h1>
        <form className="input-container" onSubmit={handleSubmit}>
          <input type="text" placeholder='enter todo' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button type='submit'>Go</button>
        </form>
        <div className="todolist-container">
          <ul>
          {
            todos.map((t)=>(
              <li key={t.id}>
              <p>{t.todo}</p>
              <div className="action">
              <button onClick={()=>handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
              </div>
            </li>
            ))
          }
          </ul>
          
        </div>
      </div>
    </>
  )
}

export default App
