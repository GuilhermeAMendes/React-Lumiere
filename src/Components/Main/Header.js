import React from "react";

const Header = ({current_page, anchor_1, anchor_2}) => {
  return (
    <header>
      <div className="website">
        <img src="/Images/Componente_5.png" alt="Logo" id="logo" />
        {current_page}
      </div>
      <nav>
        <ul>
          <a href="clients.htm">{anchor_1}</a>
          <a href="books.htm">{anchor_2}</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
