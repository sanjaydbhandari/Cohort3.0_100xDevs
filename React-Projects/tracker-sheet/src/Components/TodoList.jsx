import React from "react";
import Tag from "./Tag";

const TodoList = ({status,tasks}) => {
  return (
    <div className="todo-container flex gap-4 flex-col grow" >
      <h1 className={`text-[1rem] font-bold`} >{status}</h1>
        {
        tasks.map((item)=>(
            status === item.status && <TaskItems task={item} />
        ))
        }
    </div>
  );
};

const TaskItems=({task})=>{
    console.log(task.tags)
    return(
        <div className="todos flex flex-col p-3 tracking-tight text-gray-800 border-gray-300 rounded-lg font-medium border-2">
        <p>{task.task}</p>
        <div className="language-list flex justify-between mt-5 text-[.875rem] ">
          <div className="button-container flex gap-2">
            {
                task.tags.map((item)=>item && 
                <Tag tagname={item}/>    
            )
            }
          </div>
          <button className="bg-red-600 px-2 py-1 rounded-lg outline-none text-white">
            Delete
          </button>
        </div>
      </div>
    )
}

export default TodoList;
