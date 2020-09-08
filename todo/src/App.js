import React from 'react';
import './App.css';
import { TodoListForm } from './components/TodoListForm';

function App() {
  return (
    <div className="App">
      <TodoListForm />
      <TodoList />
    </div>
  );
}

export default App;
