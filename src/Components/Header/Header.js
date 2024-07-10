import React from "react";
import "./Header.css";

const Header = ({ current_page, anchor_1, anchor_2 , anchor_3}) => {
  return (
    <header>
      <div className="website">
        <img src="/Images/Componente_5.png" alt="Logo" id="logo" />
        {current_page}
      </div>
      <nav>
        <a href="Users.html">{anchor_1}</a>
        <a href="Books.html">{anchor_2}</a>
        <a href="Faq.html">{anchor_3}</a>
      </nav>
    </header>
  );
};

export default Header;
