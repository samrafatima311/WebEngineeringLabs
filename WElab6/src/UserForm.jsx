import React, { useState } from 'react';

export default function UserForm() {
  const [name, setName] = useState('');

  return (
    <div className="task">
      <h3>User Form</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
