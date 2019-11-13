import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="div">DIV1</div>
      <div className="div" style={{ marginLeft: "10px" }}>
        DIV2
      </div>
      <div className="div" style={{ marginLeft: "auto" }}>
        DIV3
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
* it would show something like
* DIV1  DIV2                     DIV3
*/