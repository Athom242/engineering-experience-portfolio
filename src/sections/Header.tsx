import { NavLink } from "react-router-dom";
import  React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO / IDENTITÉ */}
        <div className="logo">
          <h2>Engineering Experience</h2>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/engineering" className={({ isActive }) => isActive ? "active" : ""}>
                Engineering
              </NavLink>
            </li>

            <li>
              <NavLink to="/data" className={({ isActive }) => isActive ? "active" : ""}>
                Data
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;