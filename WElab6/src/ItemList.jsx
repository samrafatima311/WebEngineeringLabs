import React from 'react';

export default function ItemList() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div className="task">
      <h3>Item List</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
