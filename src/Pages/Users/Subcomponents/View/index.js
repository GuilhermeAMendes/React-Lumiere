import React from "react";
import "../../../../Components/Global/View.css";

const View = ({ info }) => {
  return (
    <div className="view">
      {Array.isArray(info) ? (
        info.map((item, index) => (
          <div className="person-details" key={index}>
            <p>
              <strong>CPF:</strong> {item.CPF}
            </p>
            <p>
              <strong>Nome:</strong> {item.name}
            </p>
            <p>
              <strong>Endereço:</strong> {item.street}, Número: {item.nro}
            </p>
            <p>
              <strong>CEP:</strong> {item.CEP}
            </p>
            <p>
              <strong>Emails:</strong> [ {item.emails.join(", ")} ]
            </p>
            <p>
              <strong>Telefones:</strong> [ {item.telephones.join(", ")} ]
            </p>
            <p>
              <strong>Aniversário:</strong> {item.birthday}
            </p>
            <p>
              <strong>Profissão:</strong> {item.profession}
            </p>
          </div>
        ))
      ) : (
        <p className="error">
          Não existem dados para serem recuperados. Insira alguns e tente
          novamente.
        </p>
      )}
    </div>
  );
};

export default View;
