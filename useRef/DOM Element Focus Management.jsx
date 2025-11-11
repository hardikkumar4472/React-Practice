import React, { useRef } from "react";

function FocusExample() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
    inputRef.current.select(); // selects the input text
  };

  const handleButtonClick = () => {
    buttonRef.current.style.backgroundColor = "#4CAF50";
    buttonRef.current.textContent = "Button is clicked";
    setTimeout(() => {
      buttonRef.current.style.backgroundColor = "#007bff";
      buttonRef.current.textContent = "Click Me";
    }, 1000);
  };

  return (
    <div className="p-4 space-y-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
        className="border p-2 rounded"
        defaultValue="Sample text"
      />
      <button
        onClick={handleFocusInput}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Focus Input
      </button>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Me
      </button>
    </div>
  );
}

export default FocusExample;
