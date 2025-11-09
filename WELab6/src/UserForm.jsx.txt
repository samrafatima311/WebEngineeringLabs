import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>User Form</h2>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #81c784",
          borderRadius: "5px",
          width: "250px",
        }}
      />
      <p>Your name: {name}</p>
    </div>
  );
}

export default UserForm;
