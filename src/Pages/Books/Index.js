import React from "react";
import "./Index.css";
import Inputs from "./Subcomponents/Inputs/Index";
import Buttons from "./Subcomponents/Buttons/Index";
import View from "../../Components/View/Index";

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
