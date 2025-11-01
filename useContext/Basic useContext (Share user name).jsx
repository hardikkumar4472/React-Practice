import { createContext } from "react";
export const UserContext = createContext();


import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Child() {
  const user = useContext(UserContext);
  return <h2>Hello, {user}!</h2>;
}


import React from "react";
import { UserContext } from "./UserContext";
import Child from "./Child";

export default function App() {
  return (
    <UserContext.Provider value="Hardik">
      <Child />
    </UserContext.Provider>
  );
}
