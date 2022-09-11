import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthContextProvider } from "./store/auth-ctx";
import { ListContextProvider } from "./store/list-ctx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </AuthContextProvider>
);
