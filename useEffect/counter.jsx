import { useState, useEffect } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer); 
  }, [count]); 
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
