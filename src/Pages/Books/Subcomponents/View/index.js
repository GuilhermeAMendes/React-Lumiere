import React from "react";
import "../../../../Components/Global/View.css";

const View = ({ info }) => {
  return (
    <div className="view">
      {info.map((item, index) => (
        <div className="person-details" key={item.index}>
          <p>
            <strong>ISBN:</strong> {item.ISBN}
          </p>
          <p>
            <strong>Título:</strong> {item.title}
          </p>
          <p>
            <strong>Autor(es):</strong> [ {item.author.join(", ")} ]
          </p>
          <p>
            <strong>Publicado:</strong> {item.year}
          </p>
          <p>
            <strong>Gênero:</strong> {item.genre}
          </p>
          <p>
            <strong>Número de páginas:</strong> {item.numberOfPages}
          </p>
        </div>
      ))}
    </div>
  );
};

export default View;
