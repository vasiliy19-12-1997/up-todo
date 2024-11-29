import { useContext } from "react";
import { AuthContext } from "../../../App";

import { MyButton } from "../../UI/MyButton/MyButton";

export const Login = () => {
  const [login, setLogin] = useContext(AuthContext);
  const loginToApp = () => {
    setLogin(true);
    localStorage.setItem("auth", true);
  };
  return (
    <div>
      <h1>Login</h1>
      <MyButton onClick={loginToApp}>Login</MyButton>
    </div>
  );
};
