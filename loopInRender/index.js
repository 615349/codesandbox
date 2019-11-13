import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const starNumber = 5;
  const [rate, setRate] = useState(-1);

  const createArray = () => {
    const array = [];
    for (let i = 0; i < starNumber; i++) {
      array.push(
        <div
          className={`star ${i <= rate && "highlighted"}`}
          onClick={() => setRate(i)}
        />
      );
    }

    return array;
  };

  return (
    <div className="app">
      <h3>Please rate</h3>
      <div className="stars">{createArray()}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
