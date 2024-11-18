import s from "./Button.module.css";
export const Button = ({ children, ...props }) => {
  return (
    <>
      <button className={s.Button} {...props}>
        {children}
      </button>
    </>
  );
};
