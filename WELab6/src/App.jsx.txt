import React from "react";
import HelloWorld from "./HelloWorld";
import ClickCounter from "./ClickCounter";
import ItemList from "./ItemList";
import UserForm from "./UserForm";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#388e3c" }}>
        React Basics Showcase
      </h1>
      <HelloWorld />
      <ClickCounter />
      <ItemList />
      <UserForm />
    </div>
  );
}

export default App;
