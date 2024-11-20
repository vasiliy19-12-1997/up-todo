import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/Link1">ссылка1</Link>
          <Link to="/Link2">ссылка2</Link>
          <Link to="/Link3">ссылка3</Link>
          <Link to="/Link4">ссылка4</Link>
        </div>
        <div>
          <h1>Index</h1>
        </div>
        <div>logo</div>
      </nav>
    </div>
  );
};
