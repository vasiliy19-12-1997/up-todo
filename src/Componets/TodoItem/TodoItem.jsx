import { Button } from "../UI/Button/Button";
import s from "./TodoItem.module.css";
import { useState } from "react";
export const TodoItem = ({ todo, deleteTodo }) => {
  const [isCompleted, setisCompleted] = useState(todo.completed || false);
  const toggleTodos = (id) => {
    setisCompleted(!isCompleted);
    deleteTodo(id);
  };

  return (
    <div className={s.TodoItem}>
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTodos(todo.id)}
        />
      </div>
      <div>
        <h2>{todo.title}</h2>
        <h3>{todo.description}</h3>
      </div>
      <div>
        <h4>{todo.priorite}</h4>
      </div>
      <div>
        <Button onClick={() => deleteTodo(todo.id)}>deleteTodo</Button>
      </div>
    </div>
  );
};
