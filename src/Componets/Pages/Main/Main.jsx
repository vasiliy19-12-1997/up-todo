import { useEffect, useState } from "react";
import { TodoService } from "../../../API/TodoService";
import { useFetching } from "../../../Hooks/useFetching";
import { useFilter } from "../../../Hooks/useFilter";
import { Filter } from "../../Filter/Filter";
import { TodoList } from "../../TodoList/TodoList";
import { Loader } from "../../UI/Loader/Loader";
import { ModalForm } from "../../UI/ModalForm/ModalForm";
import { MyButton } from "../../UI/MyButton/MyButton";
import { DefaultPage } from "../DefaultPage/DefaultPage";
import { AddForm } from "./../../AddForm/AddForm";

export const Main = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isModal, setIsModal] = useState(false);
  const sortedAndSearchTodos = useFilter(filter.sort, todos, filter.query);
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
      <Filter filter={filter} setFilter={setFilter} />
      <MyButton onClick={() => setIsModal(!isModal)}>AddTodo</MyButton>
      <ModalForm isModal={isModal} setIsModal={setIsModal}>
        {<AddForm createTodos={createTodos} />}
      </ModalForm>

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
