import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};
