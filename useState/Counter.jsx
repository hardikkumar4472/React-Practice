import {useState} from "react";
export default function App(){
    const [count,setCount]=useState(0);
    return(
        <>
            <h1>Current count is {count}</h1>
            <button type="button" onClick={()=>setCount((count)+1)}>Increment</button>
            <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
            <button type="button" onClick={()=>setCount(0)}>reset</button>
        </>
    );
}
