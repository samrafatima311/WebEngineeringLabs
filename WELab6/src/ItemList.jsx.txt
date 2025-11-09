import React from "react";

function ItemList() {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Item List</h2>
      <ul style={{ listStyleType: "circle" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
