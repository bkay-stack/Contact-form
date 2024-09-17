import React from "react";
import { useReducer } from "react";
import "./reducer.styles.css";
const Reducer = () => {
  const reducerFunc = (prevState, action) => {
    if (action.type === "up") return prevState + action.value;
    if (action.type === "Down") return prevState - action.value;
    if (action.type === "Reset") return 0;
    else throw new Error("invalid action type");
  };

  const [counter, dispatch] = useReducer(reducerFunc, 0);

  const countUp = () => {
    dispatch({ type: "up", value: 1 });
  };

  const countDown = () => {
    dispatch({ type: "Down", value: 1 });
  };
  const countReset = () => {
    dispatch({ type: "Reset" });
  };

  return (
    <div className="reducer">
      <h1>counter : {counter}</h1>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <button onClick={countReset}>reset</button>
    </div>
  );
};

export default Reducer;
