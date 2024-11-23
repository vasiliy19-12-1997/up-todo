import { useContext } from "react";
import { AuthContext } from "../../../App";
import { Button } from "../../UI/Button/Button";

export const Login = () => {
  const [login, setLogin] = useContext(AuthContext);
  const loginToApp = () => {
    setLogin(true);
    localStorage.setItem("auth", true);
  };
  return (
    <div>
      <h1>Login</h1>
      <Button onClick={loginToApp}>Login</Button>
    </div>
  );
};
