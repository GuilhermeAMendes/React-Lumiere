import React from "react";
import "./Books.css";

function BooksPage() {
  return (
    <div>
      <main id="mainBooks">
        <img src="/Images/Componente_4.png" alt="" />
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
          <div id="container_buttons">
            <button>Adicionar</button>
            <button>Buscar um</button>
            <button>Buscar todos</button>
            <button>Alterar dados</button>
            <button>Excluir livro</button>
          </div>
      </main>
      <div className="view"></div>
      <br></br>
    </div>
  );
}

export default BooksPage;
