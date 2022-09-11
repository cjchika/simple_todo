import React, { useEffect, useState } from "react";

const LISTS = [
  {
    id: "n1",
    name: "Goodluck Ebele Jonathan",
    stateOfOrigin: "Bayelsa",
    age: "65",
  },
  {
    id: "n2",
    name: "Muhammadu Buhari",
    stateOfOrigin: "Katsina",
    age: "78",
  },
];

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  onAddPresident: () => {},
  names: {},
});

export const AuthContextProvider = (props) => {
  const [presLists, setPresLists] = useState(LISTS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addPresidentHandler = (presList) => {
    setPresLists((prevPresidentList) => {
      return [presList, ...prevPresidentList];
    });
  };

  useEffect(() => {
    const checkIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (checkIsLoggedIn === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onAddPresident: addPresidentHandler,
        names: presLists,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
