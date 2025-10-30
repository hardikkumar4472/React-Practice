import {useState} from "react";
export default function App(){
    const [show, setShow]=useState(false)
    const [color,setColor]=useState("red")
    return(
        <>
            <div style={{backgroundColor: color, padding: 20}}>
                <input type={show ? "password" : "text"} placeholder="Enter your password"/>
                <button onClick={()=>setShow(!show)}>{show ? "show" : "Hide"}</button>
            </div>
        </>
    );
}
