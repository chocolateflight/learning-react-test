import React from "react";
import "./ListItems.css";

function ListItems(props) {
  return (
    <div className="listitem-container">
      {props.allItems.map((item) => (
        <div className="listitem" key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}

export default ListItems;
