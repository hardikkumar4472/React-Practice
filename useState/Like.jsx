import {useState} from "react";
export default function App(){
    const [like,setLike]=useState(false);
    return(
        <>
            <button onClick={()=>setLike(!like)}>{like ? "❤️ Liked" : "🤍 Like"}</button>
        </>
    );
}
