import React from "react";
import "../../../../Components/Global/Inputs.css";

function Inputs() {
  return (
    <div className="container_inputs">
      <h1>Usuários</h1>
      <label>CPF: </label>
      <input type="text" id="textCPF" />
      <label>Nome: </label>
      <input type="text" id="textName" />
      <label>Rua: </label>
      <input type="text" id="textStreet" />
      <label>Número: </label>
      <input type="text" id="textNumber" />
      <label>CEP: </label>
      <input type="text" id="textCEP" />
      <label>E-mail(s): </label>
      <input type="text" id="textEmails" />
      <label>Telefone(s): </label>
      <input type="text" id="textTelephone_numbers" />
      <label>Data de nascimento: </label>
      <input type="text" id="textBirthday" />
      <label>Profissão: </label>
      <input type="text" id="textProfession" />
    </div>
  );
}

export default Inputs;
