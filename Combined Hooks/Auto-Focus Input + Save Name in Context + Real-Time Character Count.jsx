import { useEffect, useContext, useRef } from "react";
import { nameContext } from "../Context/NameContext";
export default function NameForm(){
    const focusRef=useRef();
    const {name, setName}=useContext(nameContext);
    useEffect(()=>{
        focusRef.current.focus();
    },[]);
    return(
        <div>
            <input type="text" ref={focusRef} value={name} onChange={(e)=>(setName(e.target.value))} />
            <h1>{name.length}</h1>
        </div>
    );

};




import { nameContext } from "./Context/NameContext";
import NameForm from "./Components/Namepage";
import { useState } from "react";
export default function App(){
  const [name, setName]=useState("");
  return(
  <nameContext.Provider value={{name, setName}}>
    <NameForm/>
  </nameContext.Provider>
  );

};



import { createContext } from "react";
export const nameContext=createContext();
