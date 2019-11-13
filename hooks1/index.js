import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  function handleClick() {
    setCount(count => count + 1);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handleNameChange} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
