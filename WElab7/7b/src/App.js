import React, { useState } from 'react';
import './style.css';
import ShoppingInput from './ShoppingInput';
import ShoppingList from './ShoppingList';

export default function App() {
  const [items, setItems] = useState([]);

  // Add new item
  const addItem = (name, category) => {
    if (!name.trim() || !category.trim()) return;
    const newItem = { name, category, purchased: false };
    setItems([...items, newItem]);
  };

  // Toggle purchased status
  const togglePurchased = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, purchased: !item.purchased } : item
    );
    setItems(updatedItems);
  };

  // Remove item
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>🛍️ Shopping List</h1>
      <ShoppingInput onAddItem={addItem} />
      <ShoppingList
        items={items}
        onToggle={togglePurchased}
        onDelete={removeItem}
      />
    </div>
  );
}
