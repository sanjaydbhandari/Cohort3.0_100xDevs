import React from "react";
import TodoList from "./TodoList";

const todolist = [
  {
    title: "To Do",
    color: "blue",
    tasks: {
      task: "Change the delete button",
      language: ["HTML", "CSS"],
    },
    status: "Todo",
  },
  {
    title: "Doing",
    color: "yellow",
    tasks: {
      task: "Change the delete button",
      language: ["HTML", "CSS"],
    },
    status: "Doing",
  },
  {
    title: "Done",
    color: "green",
    tasks: {
      task: "Change the delete button",
      language: ["HTML", "CSS"],
    },
    status: "Done",
  },
];

const TodoContainer = () => {
  return (
    <div className="flex justify-between gap-10 items-center m-[30px]">
      {todolist.map((todo, index) => (
        <TodoList todo={todo}/>
      ))}
    </div>
  );
};

export default TodoContainer;
