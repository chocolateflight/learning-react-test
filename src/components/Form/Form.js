import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [enteredInput, setEnteredInput] = useState();

  function inputHandler(event) {
    setEnteredInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const itemData = {
      content: enteredInput,
      id: Math.random().toString(),
    };
    props.onSubmit(itemData);
    setEnteredInput("")
  }

  function resetHandler() {
    props.onReset(true);
  }

  return (
    <div className="flexitem main-form">
      <div className="col-title main-form">Form</div>

      <form className="form-items main-form" onSubmit={submitHandler}>
        <label for="main-input">Write in here:</label>
        <input
          id="main-input"
          className="input-field"
          type="text"
          max="50"
          value={enteredInput}
          onChange={inputHandler}
        ></input>
        <button className="main-submit" type="submit">
          Add
        </button>
        <button className="main-cancel" type="button" onClick={resetHandler}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
