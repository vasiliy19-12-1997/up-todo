import { useState, useEffect } from "react";
import { useFilter } from "../../../Hooks/useFilter";
import { useFetching } from "../../../Hooks/useFetching";
import { TodoService } from "../../../API/TodoService";
import { Navbar } from "../../Navbar/Navbar";
import { AddForm } from "../../AddForm/AddForm";
import { Filter } from "../../Filter/Filter";
import { Loader } from "../../UI/Loader/Loader";
import { DefaultPage } from "../../Pages/DefaultPage/DefaultPage";
import { TodoList } from "../../TodoList/TodoList";
export const Home = () => {
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
      {isLoading && <Loader />}
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
};
