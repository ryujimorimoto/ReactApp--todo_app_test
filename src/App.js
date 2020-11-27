// import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import { div } from 'prelude-ls';
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {
  const { todos, toggleTodo, deleteTodo } = useTodo();
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}
export default App;

// kindle 73% 5.6 Todoを追加するフォームを実装