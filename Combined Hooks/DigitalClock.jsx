import { useState, useEffect, useRef } from "react";
export default function DigitalClock(){
    const[time,setTime]=useState(new Date());
    const intervalRef=useRef();
    useEffect(()=>{
        const interval=setInterval(()=>{
            intervalRef.current=setInterval(()=>{
                setTime(new Date());
            },1000);
        })
        return ()=>clearInterval(interval);
    })
    return(
        <>
        <h1>{time.toLocaleTimeString()}</h1>
        </>
    )
}
