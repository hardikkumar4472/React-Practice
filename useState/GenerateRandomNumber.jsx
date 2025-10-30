import {useState} from "react";
export default function App(){
    const [generate, setGenerate]=useState(0);
    return(
        <>
            <h1>Generated Number is {generate}</h1>
            <button onClick={()=>setGenerate(Math.floor(Math.random()*1000000))}>Generate </button>
            
        </>
    );
}
