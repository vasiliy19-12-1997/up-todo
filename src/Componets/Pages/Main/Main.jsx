import { useEffect, useState } from "react";
import { TodoService } from "../../../API/TodoService";
import { useFetching } from "../../../Hooks/useFetching";
import { useFilter } from "../../../Hooks/useFilter";
import { AddForm } from "../../AddForm/AddForm";
import { Filter } from "../../Filter/Filter";
import { TodoList } from "../../TodoList/TodoList";
import { Loader } from "../../UI/Loader/Loader";
import { DefaultPage } from "../DefaultPage/DefaultPage";
import { ModalForm } from "../../UI/ModalForm/ModalForm";
import { Button } from "../../UI/Button/Button";
export const Main = () => {
  const [todos, setTodos] = useState([]);
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");
  const [isModal, setIsModal] = useState(false);
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
  const showModal = () => {
    setIsModal(!isModal);
  };
  return (
    <div className="App">
      <Button onClick={showModal}>add Todo</Button>
      <ModalForm createTodos={createTodos} isModal={isModal} />
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
