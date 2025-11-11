import React, { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const previousNameRef = useRef("");
  const previousAgeRef = useRef("");

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  useEffect(() => {
    previousAgeRef.current = age;
  }, [age]);

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your Age"
      />
      <div>
        <h1>Current Name: {name}</h1>
        <h1>Current Age: {age}</h1>a
      </div>
      <div>
        <h1>Previous Name: {previousNameRef.current}</h1>
        <h1>Previous Age: {previousAgeRef.current}</h1>
      </div>
    </div>
  );
}

export default App;
