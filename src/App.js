import React from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  return (
    <div className="main-body">
      <div className="main-container">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
