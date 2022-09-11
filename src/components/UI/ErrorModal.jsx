import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
  return (
    <div className="mx-80 rounded-xl bg-white fixed mt-32 z-50 overflow-hidden w-6/12">
      <header className="bg-emerald-400 p-5">
        <h2 className="m-0 text-white font-bold text-2xl">{props.title}</h2>
      </header>
      <div className="p-5">
        <p className="text-lg">{props.message}</p>
      </div>
      <footer className="p-6 flex justify-end">
        <button
          className="bg-emerald-400 text-white p-2 rounded-xl hover:bg-emerald-500 px-7 py-2 font-bold text-lg"
          onClick={props.onConfirm}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
