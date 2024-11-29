import { AddForm } from "../../AddForm/AddForm";
export const ModalForm = ({ isModal, createTodos }) => {
  return <div>{isModal && <AddForm createTodos={createTodos} />}</div>;
};
