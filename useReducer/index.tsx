import { useReducer } from "react";

type StateType = {
  count: number;
};

enum DispatchType {
  Increment = "increment",
  Decrement = "decrement"
}

type ActionType = {
  type: DispatchType;
};

const initialState: StateType = { count: 0 };

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case DispatchType.Increment:
      return { count: state.count + 1 };
    case DispatchType.Decrement:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: DispatchType.Decrement })}>
        -
      </button>
      <button onClick={() => dispatch({ type: DispatchType.Increment })}>
        +
      </button>
    </>
  );
};
