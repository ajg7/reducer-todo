import React from 'react';
import './App.css';
import {TodoListForm} from './components/TodoListForm';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoListForm />
      <TodoList />
    </div>
  );
}

export default App;
