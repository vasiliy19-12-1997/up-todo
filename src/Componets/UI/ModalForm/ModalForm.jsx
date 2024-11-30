import s from "./ModalForm.module.css";
export const ModalForm = ({ children, isModal, setIsModal }) => {
  const styleClasses = [s.ModalForm];
  if (isModal) {
    styleClasses.push(s.active);
  }
  return (
    <div
      className={styleClasses.join(" ")}
      onClick={() => setIsModal(!isModal)}
    >
      <div className={s.ModalFormContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
