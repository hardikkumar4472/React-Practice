import { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: 20,
      }}
    >
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
