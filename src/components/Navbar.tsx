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
            <Link to="/" className="nav-link nav-link-blink p-1 py-0 mx-4">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link nav-link-blink p-1 py-0 mx-4">
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              className="nav-link nav-link-blink p-1 py-0 mx-4"
            >
              skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link nav-link-blink p-1 py-0 mx-4"
            >
              projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link nav-link-blink p-1 py-0 mx-4"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
