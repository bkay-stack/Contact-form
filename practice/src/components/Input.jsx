import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState(null);

  const displayText = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h1 className="display">{value} </h1>
      <input type="text" onInput={displayText} />
    </>
  );
};

export default Input;
