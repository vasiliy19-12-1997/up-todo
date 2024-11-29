import { useState, useRef } from "react";
import { MyButton } from "../UI/MyButton/MyButton";
import { Input } from "../UI/Input/Input";
import { useFiled } from "../../Hooks/useField";

import "./AddForm.css";
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

      <MyButton onClick={addTodo}>+</MyButton>
    </div>
  );
};
