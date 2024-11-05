import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(-1)

  // useEffect(()=>{
  //   console.log(todos)
  // },[todos])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(editId !== -1){
      const editTodo = todos.find((t)=>t.id===editId)
      const updatedTodo = todos.map((t)=>t.id===editTodo.id ? {id:editTodo.id,todo}: {id:t.id,todo:t.todo})
      if(updatedTodo){
        setTodos([...updatedTodo])
        setTodo('')
        setEditId(-1)
      }
    }else{
      if(todo !== ''){
        await setTodos([...todos,{id:`${Date.now()}`,todo}])
      }
      setTodo("")
    }
  }

  const handleEdit= (id) =>{
    const editTodo = todos.find((t)=>t.id===id)
    setTodo(editTodo.todo)
    setEditId(editTodo.id)
  }

  const handleDelete = (id) => {
    const editedTodo = todos.filter((t)=>t.id!==id);
    setTodos([...editedTodo])
  }

  return (
    <>
      <div className="todo-container">
        <h1>My Todo App</h1>
        <form className="input-container" onSubmit={handleSubmit}>
          <input type="text" placeholder='enter todo' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button type='submit'>{editId === -1?'Go':'Edit'}</button>
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
