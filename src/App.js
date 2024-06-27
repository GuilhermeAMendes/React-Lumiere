import React, { Component } from "react";
import Header from "./Main/Header.js";
import Main from "./Main/Main.js";
import Faq from "./Main/Faq.js";
import Footer from "./Main/Footer.js";
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
