import React from "react";
import ListItems from "./ListItems";
import "./List.css";

function List() {
  return (
    <div className="flexitem main-list">
      <div className="col-title main-list">List</div>

      <div className="list-items main-list">
        <ListItems />
      </div>
    </div>
  );
}

export default List;
