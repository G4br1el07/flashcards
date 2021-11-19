import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

export default function NavBar() {
  return (
    <nav>
      <h3>FlashCards</h3>
      <ul>
        <NavLink to="/" className="li">
          Home
        </NavLink>
        <NavLink to="/courses" className="li">
          Cursos
        </NavLink>
        <NavLink to="/register" className="li">
          Registro
        </NavLink>
        <NavLink to="/edit" className="li">
          Edit
        </NavLink>
      </ul>
    </nav>
  );
}
