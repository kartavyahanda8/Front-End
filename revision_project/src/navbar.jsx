import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Revision Project</h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;