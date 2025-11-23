import { useContext } from "react";
import { useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export default function Theme(){
    const [theme,setTheme]=useContext(ThemeContext);
    const btnRef=useRef();
    useEffect(()=>{
        btnRef.current.focus();
    },[]);
    return(
        <div>
            <button ref={btnRef} onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>Change theme {theme}</button>
        </div>
    )
}


import { createContext } from "react";
export const ThemeContext=createContext();

import { useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Theme from "./Components/Theme";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Theme />
    </ThemeContext.Provider>
  );
}
 
