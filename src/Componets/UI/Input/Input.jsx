import s from "./Imput.module.css";
export const Input = ({ ...props }) => {
  return (
    <>
      <input {...props} className={s.Input} type="text" />
    </>
  );
};
