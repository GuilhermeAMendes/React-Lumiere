import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Index.css";

function Header() {
  const [page] = useState("Início");
  const [anchor_1] = useState("Usuários");
  const [anchor_2] = useState("Livros");
  const [anchor_3] = useState("FAQ");
  return (
    <header>
      <div className="website">
        <img src="/Images/Componente_5.png" alt="Logo" id="logo" />
        <NavLink to="/">{page}</NavLink>
      </div>
      <nav>
        <NavLink to="/Users">{anchor_1}</NavLink>
        <NavLink to="/Books">{anchor_2}</NavLink>
        <NavLink to="/Faq">{anchor_3}</NavLink>
      </nav>
    </header>
  );
}

export default Header;
