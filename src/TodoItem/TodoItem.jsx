import { useState } from "react";
export const TodoItem = ({ todo, deleteTodo }) => {
  const [isCompleted, setisCompleted] = useState(false);
  const toggleTodos = (id) => {
    setisCompleted(!isCompleted);
    deleteTodo(id);
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTodos(todo.id)}
        />
      </div>
      <div>
        <h2>{todo.title}</h2>
        <h3>{todo.time}</h3>
      </div>
      <div>
        <h4>{todo.priorite}</h4>
      </div>
      <div>
        <button onClick={() => deleteTodo(todo.id)}>deleteTodo</button>
      </div>
    </div>
  );
};
