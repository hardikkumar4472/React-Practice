import { useEffect, useState, useRef } from "react";
export default function AutoStopwatch(){
    const [count, setCount]=useState(0);
    const [isRunning, setIsRunning]=useState(false);
    const intervalRef=useRef();
    useEffect(()=>{
        if (isRunning){
            intervalRef.current=setInterval(()=>{
                setCount(count=>count+1);
            },1000);
        }
        return ()=>clearInterval(intervalRef.current);
    },[isRunning]);
    const start=()=>{
        setIsRunning(true);
    }
    const stop=()=>{
        setIsRunning(false);
    }
    const reset=()=>{
        setIsRunning(false);
        setCount(0);
    }
    return(
        <div>
            <h1>Current time: {count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    
}
