import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { useFilter } from "./Hooks/useFilter";
import tasks from "./images/tasks.jpg";
import { TodoItem } from "./TodoItem/TodoItem";
import { Button } from "./UI/Button/Button";
import { Input } from "./UI/Input/Input";
import { todoService } from "./API/TodoService";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priorite, setPrioritete] = useState("");
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const sortedAndSearchTodos = useFilter(sort, todos, query);

  const addTodo = () => {
    const newTodo = {
      title: title,
      description: description,
      priorite: priorite,
      isCompleted: false,
      time: "fdf",
      id: Math.random(),
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };
  const deleteTodo = (id) => [setTodos(todos.filter((todo) => todo.id !== id))];
  const sortTodos = (sort) => {
    setSort(sort);
  };
  async function getTodos() {
    setIsLoading(true);
    const response = await todoService.getTodos();
    setTodos(response);
    setIsLoading(false);
    console.log(response);
  }
  useEffect(() => {
    setTimeout(() => {
      getTodos();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div>
          <a href="1">ссылка1</a>
          <a href="2">ссылка2</a>
          <a href="3">ссылка3</a>
          <a href="4">ссылка4</a>
        </div>
        <div>
          <h1>Index</h1>
        </div>
        <div>logo</div>
      </nav>
      <div className="add-form">
        <div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="descrition"
          />
        </div>

        <Button onClick={addTodo}>+</Button>
      </div>
      <div className="select">
        <select value={sort} onChange={(e) => sortTodos(e.target.value)}>
          <option defaultValue="Сортировка по"></option>
          <option value="title">title</option>
          <option value="description">description</option>
        </select>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </div>
      )}
      {sortedAndSearchTodos.length === 0 && !isLoading ? (
        <div className="home">
          <img src={tasks} alt="tasks" width={250} />
          <h2>What do you want to do today</h2>
          <h3>Tap + to add your tasks</h3>
        </div>
      ) : (
        sortedAndSearchTodos.map((todo) => (
          <div key={todo.id} className="home-todos">
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))
      )}
    </div>
  );
}
