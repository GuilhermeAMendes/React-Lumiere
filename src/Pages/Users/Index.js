import React from "react";
import Buttons from "./Subcomponents/Buttons/Buttons";
import Inputs from "./Subcomponents/Inputs/Inputs";
import View from "../../Components/View/Index";
import "./Index.css";


function UsersPage() {
  return (
    <div>
      <main id="mainUsers">
        <img src="/Images/Componente_2.png" alt="=plants and books" />
        <Inputs/>
        <Buttons/>
      </main>
      <View/>
    </div>
  );
}

export default UsersPage;
