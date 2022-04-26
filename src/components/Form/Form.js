import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="flexitem main-form">
      <div className="col-title main-form">Form</div>

      <div className="form-items main-form">
        <label for="main-input">Write in here:</label>
        <input id="main-input" className="input-field" type="text" max="50"></input>
        <button className="main-submit" type="submit">Submit</button>
      </div>

    </div>
  );
}

export default Form;
