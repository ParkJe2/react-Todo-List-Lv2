import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  localStorage.setItem("todos", JSON.stringify(todos));
  const [doneTodos, setDoneTodo] = useState(() => JSON.parse(localStorage.getItem("doneTodos")) || []);
  localStorage.setItem("doneTodos", JSON.stringify(doneTodos));

  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <div className="list-container">
        <h2 className="list-title">Working...🔥</h2>
        <div className="todo-wrap">
          {todos.map((item) => (
            <TodoList key={item.id} item={item} todos={todos} setTodos={setTodos} doneTodos={doneTodos} setDoneTodo={setDoneTodo} isDone={false} />
          ))}
        </div>
        <h2 className="list-title">Done...🥳</h2>
        <div className="todo-wrap">
          {doneTodos.map((item) => (
            <TodoList key={item.id} item={item} todos={todos} setTodos={setTodos} doneTodos={doneTodos} setDoneTodo={setDoneTodo} isDone={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
