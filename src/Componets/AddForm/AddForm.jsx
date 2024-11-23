import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import { useFiled } from "../../Hooks/useField";
export const AddForm = ({ createTodos }) => {
  const [priorite, setPrioritete] = useState("");
  const [title, onChangeTitl, resetTitl] = useFiled();
  const [description, onChangeDescr, resetDescr] = useFiled();

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
    resetTitl();
    resetDescr();
  };
  return (
    <div className="add-form">
      <div>
        <Input
          value={title}
          onChange={(e) => onChangeTitl(e)}
          type="text"
          placeholder="title"
        />
        <Input
          value={description}
          onChange={(e) => onChangeDescr(e)}
          type="text"
          placeholder="descrition"
        />
      </div>

      <Button onClick={addTodo}>+</Button>
    </div>
  );
};
