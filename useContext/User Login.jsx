import { createContext } from "react";
export const AuthContext=createContext();


import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <h2>Welcome: {user ? user.name : "Guest"}</h2>
      <button class="my-5" onClick={() => setUser({ name: "Hardik" })}>
        Login
      </button>
      <button onClick={()=>setUser(null)}>Logout</button>
    </>
  );
}


import { useState } from "react";
import { AuthContext } from "../src/context/AuthContext";
import Navbar from "./components/Navbar";
export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar />
    </AuthContext.Provider>
  );
}
