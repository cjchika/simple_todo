import React, { useContext } from "react";
import style from "./UsersList.module.css";

import AuthContext from "../../store/auth-ctx";

const UsersList = (props) => {
  const authCtx = useContext(AuthContext);
  //let [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount((count += 1));
  //   }, 1000);

  //   return () => {
  //     console.log("clean up");
  //     clearTimeout(timer);
  //   };
  // }, [count]);

  //const [isDelete, setIsDelete] = useState(false);
  //const id = props.names.map((name) => name.id);

  //   const deleteNameHandler = (e) => {
  //     const id = e.target.getAttribute("name");
  //     const filteredData = props.names.filter((name) => name.id !== id);
  //     setIsDelete(true);
  //     console.log(filteredData);
  //   };

  return (
    <div className={style.list}>
      {authCtx.names.map((name) => {
        return (
          <ul key={name.id}>
            <li>
              <div className="text-center w-full flex flex-row justify-between">
                <div className="text-white font-bold text-2xl ">
                  {name.name}{" "}
                </div>
                <div className="text-white font-bold text-2xl ">
                  {name.stateOfOrigin}
                </div>
                <div className="text-white font-bold text-2xl">
                  {name.age} years
                </div>
              </div>
            </li>
          </ul>
        );
      })}
      {/* <div className="bg-slate p-3 m-20 text-center">
        <h1 className="text-white font-bold text-5xl">0</h1>
        <button
          className="bg-white p-3 rounded font-bold mt-6"
          // onClick={counter}
        >
          ADD
        </button>
      </div> */}
    </div>
  );
};

export default UsersList;
