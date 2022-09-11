import React from "react";
import style from "./ListItem.module.css";
import { MdDelete } from "react-icons/md";

const ListItem = ({ title, id, onRemoveToDo }) => {
  return (
    <div className={style.todolist}>
      <li className="font-bold text-white text-xl flex justify-between">
        <span>{title}</span>
        <button type="button" onClick={onRemoveToDo}>
          <MdDelete />
        </button>
      </li>
    </div>
  );
};

export default ListItem;
