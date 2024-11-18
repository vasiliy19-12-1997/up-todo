import { useEffect, useState } from "react";
import { TodoService } from "./API/TodoService";
import "./App.css";
import { AddForm } from "./Componets/AddForm/AddForm";
import { Filter } from "./Componets/Filter/Filter";
import { Navbar } from "./Componets/Navbar/Navbar";
import { TodoList } from "./Componets/TodoList/TodoList";
import { useFetching } from "./Hooks/useFetching";
import { useFilter } from "./Hooks/useFilter";
import tasks from "./Images/tasks.jpg";
import { TodoItem } from "./Componets/TodoItem/TodoItem";
import { DefaultPage } from "./Componets/DefaultPage/DefaultPage";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");
  const sortedAndSearchTodos = useFilter(sort, todos, query);

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await TodoService.getTodos();
    setTodos(response);
  });

  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => [setTodos(todos.filter((todo) => todo.id !== id))];

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AddForm create={createTodos} />
      <Filter sort={sort} query={query} setQuery={setQuery} setSort={setSort} />
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </div>
      )}
      {error && <h1>{error}</h1>}
      {sortedAndSearchTodos.length === 0 && !isLoading ? (
        <DefaultPage />
      ) : (
        <div className="home-todos">
          <TodoList todos={sortedAndSearchTodos} deleteTodo={deleteTodo} />
        </div>
      )}
    </div>
  );
}
