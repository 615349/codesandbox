import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <div>Hello CodeSandbox</div>
      <div>Start editing to see some magic happen!</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

