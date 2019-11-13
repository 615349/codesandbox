import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initialState = { count: 0 };
const INC = "incremental";
const DEC = "decremental";

function reducer(state, action) {
  switch (action.type) {
    case INC:
      return {
        count: state.count + 1
      };

    case DEC:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleINC() {
    dispatch({ type: INC });
  }

  function handleDEC() {
    dispatch({ type: DEC });
  }

  return (
    <>
      <div>count: {state.count}</div>
      <button onClick={handleINC}>INC</button>
      <button onClick={handleDEC}>DEC</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

