// import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import { div } from 'prelude-ls';
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";
import TodoForm from "./components/TodoForm";

function App() {
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodo();
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}
export default App;