import React from "react";
import "./Index.css";
import Inputs from "./Subcomponents/Inputs/Index";
import Buttons from "./Subcomponents/Buttons/Index";
import View from "./Subcomponents/View";

function BooksPage() {
  return (
    <div>
      <main id="mainBooks">
        <img src="/Images/Componente_4.png" alt="" />
          <Inputs/>
          <Buttons/>
          <View/>
      </main>
      <br></br>
    </div>
  );
}

export default BooksPage;
