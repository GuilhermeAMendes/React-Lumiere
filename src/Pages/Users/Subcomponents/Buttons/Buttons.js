import React from "react";
import "../../../../Components/Global/Buttons.css";

function Buttons({ fetchAllUsers, fetchOneUser }) {
  return (
    <div id="container_buttons">
      <button>Adicionar</button>
      <button onClick={() => fetchOneUser("123.456.789-89")}>Buscar um</button>
      <button onClick={fetchAllUsers}>Buscar todos</button>
      <button onClick={fetchOneUser}>Alterar dados</button>
      <button>Excluir usuário</button>
    </div>
  );
}

export default Buttons;
