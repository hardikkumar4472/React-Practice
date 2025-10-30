import {useState} from "react";
export default function App(){
    const [color, setColor]=useState("red")
    return(
        <>
            <div style={{backgroundColor: color, padding: 20}}>
                 <button onClick={() => setColor("lightblue")}>Blue</button>
              <button onClick={() => setColor("lightgreen")}>Green</button>
              <button onClick={() => setColor("pink")}>Pink</button>
            </div>
        </>
    );
}
