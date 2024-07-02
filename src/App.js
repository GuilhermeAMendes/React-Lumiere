import React, { Component } from "react";
import Header from "./Components/Main/Header.js"
import Main from "../Components/Main/Main.js";
import Faq from "../Components/Main/Faq.js";
import Footer from "../Components/Main/Footer.js";
import "./Main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "Lumiere",
    };
  }

  render() {
    return (
      <div id="application">
        <Header />
        <Main />
        <Faq/>
        <Footer/>
      </div>
    );
  }
}

export default App;
