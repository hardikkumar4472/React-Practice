import { createContext } from "react";
export const LangContext=createContext();

import { useState } from "react";
import { LangContext } from "./LangContext";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Page />
    </LangContext.Provider>
  );
}



import { useState } from "react";
import { AuthContext } from "../src/context/AuthContext";
import Navbar from "./components/Navbar";
import { LangContext } from "./context/LangContext";
import Language from "./components/Language";

export default function App() {
  const [lang, setLang] = useState("English");

  return (
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <Navbar />
    // </AuthContext.Provider>
    <LangContext.Provider value={{lang,setLang}}>
      <Language/>
    </LangContext.Provider>
  );
}


