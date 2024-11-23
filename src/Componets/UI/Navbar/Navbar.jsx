import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../App";
import { Button } from "../Button/Button";
export const Navbar = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const logOut = () => {
    setAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/Link1">ссылка1</Link>
          <Link to="/Link2">ссылка2</Link>
          <Link to="/Link3">ссылка3</Link>
          <Link to="/Link4">ссылка4</Link>
          <Link to="/">Home</Link>
        </div>
        <div>
          <h1>Index</h1>
        </div>
        <Button onClick={logOut}>logOut</Button>
      </nav>
    </div>
  );
};
