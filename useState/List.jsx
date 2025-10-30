import {useState} from "react";
export default function App(){
    const [task, setTask]=useState("");
    const [tasks, setTasks]=useState([]);
    const addTask=()=>{
        if (task.trim()){
            setTasks([...tasks,task]);
            setTask("")
        }
    };
    return(
        <>
            <input value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <button onClick={()=>setTasks([])}>Clear</button>
            <button onClick={()=>setTasks(tasks.slice(0,-1))}>delete</button>
            <ul>{tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </>
    );
}
