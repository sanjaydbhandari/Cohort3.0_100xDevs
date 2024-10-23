import {useState} from 'react'

export default function TodoList(){

    const [todos,setTodos] = useState([{
        id:1,
        list:"go to gym",
        done:true
    },{
        id:2,
        list:"go to shop",
        done:false
    },{
        id:3,
        list:"go to college",
        done:false
    }
])

    const listStyle = {
        display:"flex",
        flexDirection:"column",
        alignContent:"left",
        border:"1px solid #000",
        margin:"1rem auto",
        width:"50vw",
        padding:"1rem"
    }
    
    return (
        <div className="TodoList" style={listStyle}>
        {[
            todos.map((todo)=>(
                <Todo key={todo.id} list={todo.list} done={todo.done}/>
            ))
        ]}
        </div>
    )
} 

function Todo({list,done}){
    return(
        <div className="todo">
            {done ? <input type="checkbox" name="done" checked/> : <input type="checkbox" name="done"/>} 
            {list}
        </div>
    )
}