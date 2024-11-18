import { useFetching } from "../../Hooks/useFetching";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import { useState } from "react";
export const AddForm = ({ create: createTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priorite, setPrioritete] = useState("");

  const addTodo = () => {
    const newTodo = {
      title: title,
      description: description,
      priorite: priorite,
      isCompleted: false,
      time: "fdf",
      id: Math.random(),
    };
    createTodos(newTodo);
    setTitle("");
    setDescription("");
  };
  return (
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
  );
};
