import React, { useState, useReducer, useEffect, useContext } from "react";
import styles from "./Login.module.css";

import AuthContext from "../../store/auth-ctx";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_USER_INPUT":
      return { value: action.val, emailValidity: action.val.includes("@") };
    case "EMAIL_INPUT_BLUR":
      return { value: state.value, emailValidity: state.value.includes("@") };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "PASSWORD_USER_INPUT":
      return {
        value: action.val,
        passwordValidity: action.val.trim().length > 5,
      };
    case "PASSWORD_INPUT_BLUR":
      return {
        value: state.value,
        passwordValidity: state.value.trim().length > 5,
      };
    default:
      return state;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    emailValidity: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    passwordValidity: null,
  });

  const { emailValidity: emailIsValid } = emailState;
  const { passwordValidity: passwordIsValid } = passwordState;

  useEffect(() => {
    const timeWaiter = setTimeout(() => {
      console.log("Validating..");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("Clearing..");
      clearTimeout(timeWaiter);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailHandler = (event) => {
    dispatchEmail({ type: "EMAIL_USER_INPUT", val: event.target.value });

    //setFormIsValid(passwordState.passwordValidity && emailState.emailValidity);
  };

  const passwordHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_USER_INPUT", val: event.target.value });

    //setFormIsValid(passwordState.passwordValidity && emailState.emailValidity);
  };

  const emailValidator = () => {
    dispatchEmail({ type: "EMAIL_INPUT_BLUR" });
  };

  const passwordValidator = () => {
    dispatchPassword({ type: "PASSWORD_INPUT_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    authCtx.onLogin(emailState.value, passwordState.value);

    // setEnteredEmail("");
    // setEnteredPassword("");
  };

  return (
    <div className={styles.login}>
      <form onSubmit={submitHandler}>
        <label htmlFor="email" className="text-emerald-500">
          Email
        </label>
        <input
          className={
            emailState.emailValidity === false
              ? "bg-lite_red border-b-red"
              : "bg-lite_green border-b-emerald-500"
          }
          id="email"
          type="text"
          value={emailState.value}
          onChange={emailHandler}
          onBlur={emailValidator}
        />
        <label htmlFor="password" className="text-emerald-500 ">
          Password
        </label>
        <input
          className={
            passwordState.passwordValidity === false
              ? "bg-lite_red border-b-red"
              : "bg-lite_green border-b-emerald-500"
          }
          id="password"
          type="password"
          value={passwordState.value}
          onChange={passwordHandler}
          onBlur={passwordValidator}
        />

        <button
          type="submit"
          className={
            !formIsValid
              ? "text-xl text-center px-6 w-full bg-ash text-btn_dis p-2 rounded-full hover:bg-ash font-bold cursor-not-allowed"
              : "text-xl text-center px-6 w-full bg-emerald-400 text-white p-2 rounded-full hover:bg-emerald-500 font-bold"
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
