import React from "react";
import "./Inputs.css";

function Inputs() {
  return (
    <div className="container_inputs">
      <h1>Livros</h1>
      <br />
      <label>ISBN:</label>
      <input type="text" id="textISBN" />
      <label>Título:</label>
      <input type="text" id="textTitle" />
      <label>Autor(es):</label>
      <input type="text" id="textAuthor" />
      <label>Ano de Publicação:</label>
      <input type="text" id="textYear" />
      <label>Gênero:</label>
      <input type="text" id="textGenre" />
      <label>Número de páginas:</label>
      <input type="text" id="textnumberOfPages" />
    </div>
  );
}

export default Inputs;
