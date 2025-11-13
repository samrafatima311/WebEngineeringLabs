import React from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ items, onToggle, onDelete }) {
  if (items.length === 0)
    return <p className="empty-text">No items yet. Add one 🛒</p>;

  return (
    <ul className="shopping-list">
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}
