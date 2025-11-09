import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Click Counter</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 15px",
          background: "#81c784",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default ClickCounter;
