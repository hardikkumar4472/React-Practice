import { useRef } from "react";
export default function App(){
  const inputRef=useRef(null);
  const handleClick=()=>{
    alert("Input value is: "+ inputRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter Any Text" />
      <button type="btn" onClick={handleClick}>Show Text</button>
    </div>
  )
}
