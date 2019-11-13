import React, { useState } from "react";
import ReactDOM from "react-dom";

function Component() {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  console.log(a, b);

  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA("aa");
      setB("bb");
    });
  }

  function handleClickWithoutPromise() {
    setA("aa");
    setB("bb");
  }

  return (
    <>
      <button onClick={handleClickWithPromise}>
        {a}-{b} with promise
      </button>
      <button onClick={handleClickWithoutPromise}>
        {a}-{b} without promise
      </button>
    </>
  );
}

function App() {
  return <Component />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
* click first button, console would show
* aa b
* aa bb
* click the second button, console would show
* aa bb
*/

