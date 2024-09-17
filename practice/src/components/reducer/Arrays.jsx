import React, { useReducer, useState } from "react";

const Arrays = () => {
  const arrReducer = (prevState, action) => {
    return [...prevState, action.value];
  };

  const [state, dispatch] = useReducer(arrReducer, [0]);
  const [currNum, setNewNum] = useState(null);

  const addRandomNum = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setNewNum(randomNumber);
    dispatch({ type: "addRandom", value: randomNumber });
    console.log(currNum);
  };

  return (
    <>
      <h1>Arrays</h1>
      <p>{JSON.stringify(state, null, 2)}</p>
      <button onClick={addRandomNum}>Add arrays</button>
    </>
  );
};

export default Arrays;
