import React from "react";
import TodoList from "./TodoList"; 

const TodoContainer = ({tasks}) => {
  return (
    <div className="flex justify-between gap-10 items-center m-[30px]">
        <TodoList status="Pending" tasks={tasks} />
        <TodoList status="InProgress" tasks={tasks}/>
        <TodoList status="Done" tasks={tasks}/>
    </div>
  );
};

export default TodoContainer;
