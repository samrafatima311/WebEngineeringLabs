import React from 'react';
import HelloWorld from './HelloWorld';
import ClickCounter from './ClickCounter';
import ItemList from './ItemList';
import UserForm from './UserForm';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>React Lab Tasks</h1>
      <HelloWorld />
      <ClickCounter />
      <ItemList />
      <UserForm />
    </div>
  );
}
