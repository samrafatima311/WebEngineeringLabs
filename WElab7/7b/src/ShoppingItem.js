import React from 'react';

export default function ShoppingItem({ item, onToggle, onDelete }) {
  return (
    <li
      className={`shopping-item ${item.purchased ? 'purchased' : ''}`}
      onClick={onToggle}
    >
      <div>
        <span className="item-name">{item.name}</span>
        <span className="item-category">({item.category})</span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        ❌
      </button>
    </li>
  );
}
