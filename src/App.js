import React, { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  const [itemsList, setItemsList] = useState([]);

  function addItemHandler(item) {
    setItemsList((previtems) => {
      return [...previtems, item];
    });
  }

  function resetHandler(event) {
    setItemsList([]);
  }

  return (
    <div className="main-body">
      <div className="main-container">
        <Form onSubmit={addItemHandler} onReset={resetHandler} />
        <List items={itemsList} />
      </div>
    </div>
  );
}

export default App;
