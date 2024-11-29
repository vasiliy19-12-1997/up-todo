import s from "./MyButton.module.css";
export const MyButton = ({ children, ...props }) => {
  return (
    <>
      <button className={s.Button} {...props}>
        {children}
      </button>
    </>
  );
};
