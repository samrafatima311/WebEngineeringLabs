import React, { useState } from 'react';

export default function ShoppingInput({ onAddItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(name, category);
    setName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="shopping-input">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name..."
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
