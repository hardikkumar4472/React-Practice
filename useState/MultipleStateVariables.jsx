import {useState} from "react";
export default function App(){
    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    
    return(
        <>
            <h1>Your name is {name} and age is {age}</h1>
        <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input placeholder="Age" type="Number" onChange={(e)=>setAge(e.target.value)}/>
        </>
    );
}
