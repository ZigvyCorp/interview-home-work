// src/features/TodoList.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTodo,
  addTodoAsync,
  removeTodo,
  getTodoAsync,
} from "./todoSlice";

function Todo({ todo, onDelete }) {
  const onClick = (event) => {
    event.preventDefault();
    onDelete(todo.id);
  };

  return (
    <li>
      <span>{todo.title}</span>
      <a href="#" onClick={onClick}>
        Delete
      </a>
    </li>
  );
}

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector(selectTodo);
  const [todo, setTodo] = useState({ id: 1, title: "" });

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  const onChange = (event) => {
    const { value } = event.target;
    setTodo({ ...todo, title: value });
  };

  const onClick = () => {
    setTodo({ id: todo.id + 1, title: "" });
  };

  const onDelete = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={todo.title} />
      <button onClick={onClick}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
