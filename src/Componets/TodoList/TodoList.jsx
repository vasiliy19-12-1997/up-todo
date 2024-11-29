import { TodoItem } from "../TodoItem/TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../App.css";
export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      <TransitionGroup className="todo-list">
        {todos.map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames="todos">
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
