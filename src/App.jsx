import { useState } from "react";
import "./App.css";
import tasks from "./images/tasks.jpg";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [priorite, setPrioritete] = useState("");

  const addTodo = () => {
    const newTodo = {
      title: title,
      description: description,
      priorite: priorite,
      isCompleted: isCompleted,
      time: "fdf",
      id: Math.random(),
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };
  const deleteTodo = (id) => [setTodos(todos.filter((todo) => todo.id !== id))];
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
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="descrition"
        />
        <button onClick={addTodo}>add todo</button>
      </div>
      {todos.length === 0 ? (
        <div className="home">
          <img src={tasks} alt="tasks" width={250} />
          <h2>What do you want to do today</h2>
          <h3>Tap + to add your tasks</h3>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="home-todos">
            <div>
              <input type="checkbox" />
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
        ))
      )}
    </div>
  );
}

export default App;
