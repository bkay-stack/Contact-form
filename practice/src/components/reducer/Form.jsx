import React, { useReducer } from "react";

const Form = () => {
  const formReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "CHANGE": {
        return {
          ...state,
          [action.value.name]: action.value.value,
        };
      }
    }
  };

  const initialState = { name: "", email: "", age: "" };

  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const formChange = (e) => {
    console.log(e.target.name, e.target.value);
    dispatchForm({
      type: "CHANGE",
      value: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <>
      <form onSubmit={formSubmit} onChange={formChange}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="number" name="age" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
