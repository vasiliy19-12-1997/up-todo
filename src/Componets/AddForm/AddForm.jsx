import { useState } from "react";
import { useFiled } from "../../Hooks/useField";
import { Input } from "../UI/Input/Input";
import { MyButton } from "../UI/MyButton/MyButton";
export const AddForm = ({ createTodos }) => {
  const [priorite] = useState("");
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
      <div className="add-form-input">
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
      <MyButton onClick={addTodo}>+</MyButton>
    </div>
  );
};
