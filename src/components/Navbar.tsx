import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link p-1 py-0 mx-4">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link p-1 py-0 mx-4">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link p-1 py-0 mx-4">
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link p-1 py-0 mx-4">
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link p-1 py-0 mx-4">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
