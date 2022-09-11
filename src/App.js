import React, { useContext } from "react";
//import AddUser from "./components/AddUsers/AddUser";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
//import UsersList from "./components/UsersList/UsersList";
import AuthContext from "./store/auth-ctx";
import ToDoForm from "./components/ToDo/ToDoForm";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Navigation />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {/* {authCtx.isLoggedIn && <AddUser />}
        {authCtx.isLoggedIn && <UsersList />} */}
        {authCtx.isLoggedIn && <ToDoForm />}
      </main>
    </React.Fragment>
  );
}

export default App;
