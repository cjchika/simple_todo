import React, { Fragment, useState, useContext } from "react";
import style from "./ToDoForm.module.css";
import ToDoList from "./ToDoList";
import ListContext from "../../store/list-ctx";

const ToDoForm = () => {
  const [inputTodo, setInputTodo] = useState("");
  const listCtx = useContext(ListContext);

  const submitTodoHandler = (event) => {
    event.preventDefault();

    if (inputTodo.trim().length === 0) {
      return;
    }

    const newToDo = {
      id: Math.random().toString(),
      title: inputTodo,
    };

    listCtx.addToDo(newToDo);
    setInputTodo("");
  };

  const inputTodoHandler = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <Fragment>
      <div className={style.todo}>
        <form onSubmit={submitTodoHandler}>
          <div className="flex justify-start">
            <div>
              <label htmlFor="text">To Do List</label>
              <input
                type="text"
                id="text"
                placeholder="Enter a ToDo"
                value={inputTodo}
                onChange={inputTodoHandler}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-emerald-500 text-white font-bold p-2 px-6"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToDoList />
    </Fragment>
  );
};

export default ToDoForm;
