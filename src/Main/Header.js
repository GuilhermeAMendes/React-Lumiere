import React from "react";

const Header = () => {
  return (
    <header>
      <div className="website">
        <img src="/Images/Componente_5.png" alt="Logo" id="logo" />
        Lumiere
      </div>
      <nav>
        <ul>
          <a href="clients.htm">Clientes</a>
          <a href="books.htm">Livros</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
