import {useState} from "react"
export default function App(){
    const [color, setColor]=useState("yellow")
    return (
        <>
            <h1>My favourite color is {color}</h1>
            <button type="button" 
                onClick={()=>setColor("red")
                }>Click here</button>
            <button type="button" 
                onClick={()=>setColor("green")
                }>Click here</button>
            <button type="button" 
                onClick={()=>setColor("white")
                }>Click here</button>
            <button type="button" 
                onClick={()=>setColor("blue")
                }>Click here</button>
    </>
    );
}
