import React, { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="task">
      <h3>Click Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
