import React from "react";
import Tag from "./Tag";

const TodoList = ({todo,index}) => {
  return (
    <div className="todo-container flex gap-4 flex-col grow" key={index}>
      <h1 className={`text-[1rem] font-bold`} >{todo.title}</h1>
      <div className="todos flex flex-col p-3 tracking-tight text-gray-800 border-gray-300 rounded-lg font-medium border-2">
        <p>Change delete icon</p>
        <div className="language-list flex justify-between mt-5 text-[.875rem] ">
          <div className="button-container flex gap-2">
            {/* <Tag language={}/> */}
          </div>
          <button className="bg-red-600 px-2 py-1 rounded-lg outline-none text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
