import React, { useState, Fragment, useRef, useContext } from "react";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

import AuthContext from "../../store/auth-ctx";

const AddUser = (props) => {
  const authCtx = useContext(AuthContext);
  const nameInputRef = useRef();
  const stateInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredState, setEnteredState] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitNameHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (
      enteredName.length === 0 ||
      enteredState.length === 0 ||
      enteredAge.length === 0
    ) {
      setError({ title: "Invalid entry", message: "Please enter valid data" });
      return;
    }

    if (enteredAge < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age" });
      return;
    }

    const formerPresidents = {
      id: Math.random().toString(),
      name: enteredName,
      stateOfOrigin: enteredState,
      age: enteredAge,
    };

    authCtx.onAddPresident(formerPresidents);

    nameInputRef.current.value = "";
    stateInputRef.current.value = "";
    ageInputRef.current.value = "";

    // setEnteredName("");
    // setEnteredState("");
    // setEnteredAge("");
  };

  // const addNameHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const addStateHandler = (event) => {
  //   setEnteredState(event.target.value);
  // };

  // const addAgeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={style.adduser}>
        <form onSubmit={submitNameHandler}>
          <label htmlFor="name" className="text-emerald-500 ">
            Name
          </label>
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="state" className="text-emerald-500 ">
            State of Origin
          </label>
          <input id="state" type="text" ref={stateInputRef} />
          <label htmlFor="name" className="text-emerald-500">
            Age
          </label>
          <input id="age" type="number" ref={ageInputRef} />
          <button
            type="submit"
            className="font-bold text-xl text-center w-full bg-emerald-400 text-white p-2 rounded-full hover:bg-emerald-500"
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddUser;
