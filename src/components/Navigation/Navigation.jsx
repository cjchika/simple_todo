import React, { useContext } from "react";

import AuthContext from "../../store/auth-ctx";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <div className="bg-slate flex py-3 px-16 items-center justify-between">
        <h1 className="text-4xl font-bold   bg-slate text-white">
          Simple ToDo
        </h1>
        <ul className="flex text-2xl text-white ">
          {authCtx.isLoggedIn && (
            <li className="px-4 ">
              <a href="/">Users</a>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li className="px-4">
              <a href="/">Admin</a>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li onClick={authCtx.onLogout}>
              <a
                href="/"
                className="px-4 py-1 font-bold  text-slate bg-white rounded-full"
              >
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
