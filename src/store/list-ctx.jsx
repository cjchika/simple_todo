import React, { useReducer, useEffect } from "react";

let DUMMY_LIST = [];

const toDoReducer = (state, action) => {
  if (action.type === "ADD") {
    return [action.todoList, ...state];
  }
  if (action.type === "REMOVE") {
    const updatedList = state.filter((todo) => todo.id !== action.id);
    return [...updatedList];
  }
  return console.error();
};

const ListContext = React.createContext({
  lists: {},
  addToDo: () => {},
  removeToDo: (id) => {},
});

export const ListContextProvider = (props) => {
  const [toDoState, dispatchToDo] = useReducer(
    toDoReducer,
    DUMMY_LIST,
    () => JSON.parse(localStorage.getItem("toDo")) || DUMMY_LIST
  );

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDoState));
  }, [toDoState]);

  const onAddToDoHandler = (todoList) => {
    dispatchToDo({ type: "ADD", todoList });
  };

  const onRemoveToDoHandler = (id) => {
    dispatchToDo({ type: "REMOVE", id });
    console.log(id);
  };

  const listProps = {
    lists: toDoState,
    addToDo: onAddToDoHandler,
    removeToDo: onRemoveToDoHandler,
  };

  return (
    <ListContext.Provider value={listProps}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
