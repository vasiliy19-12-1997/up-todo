import s from "./CheckBox.module.css";
export const CheckBox = ({ onChange, checked }) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className={s.CheckBox}
      />
      <span className={s.CheckBox + "--before"}></span>
    </label>
  );
};
