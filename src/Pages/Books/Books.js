import React from "react";
import "./Books.css";
import Inputs from "./Subcomponents/Inputs/Inputs";
import Buttons from "./Subcomponents/Buttons/Buttons";
import View from "../../Components/View/View";

function BooksPage() {
  return (
    <div>
      <main id="mainBooks">
        <img src="/Images/Componente_4.png" alt="" />
          <Inputs/>
          <Buttons/>
      </main>
      <View/>
      <br></br>
    </div>
  );
}

export default BooksPage;
