import React, { useContext } from "react";
import ListContext from "../../store/list-ctx";
import ListItem from "./ListItem";

const ToDoList = (props) => {
  const listCtx = useContext(ListContext);
  const removeToDoHandler = (id) => {
    listCtx.removeToDo(id);
  };

  const toDoLists = listCtx.lists.map((list) => (
    <ListItem
      key={Math.random().toString()}
      title={list.title}
      onRemoveToDo={removeToDoHandler.bind(null, list.id)}
    />
  ));

  const content = (
    <p className="text-center text-emerald-500 mb-20 font-bold text-2xl">
      No ToDo added yet{" "}
    </p>
  );

  return (
    <ul className="mb-20">
      {listCtx.lists.length === 0 ? content : toDoLists}
    </ul>
  );
};

export default ToDoList;
