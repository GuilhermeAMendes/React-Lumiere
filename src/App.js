import React, { useState } from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [page] = useState("Início");
  const [anchor_1] = useState("Usuários");
  const [anchor_2] = useState("Livros");
  const [anchor_3] = useState("FAQ");

  return (
    <div>
      <HashRouter>
        <Header current_page={page} anchor_1={anchor_1} anchor_2={anchor_2} anchor_3={anchor_3} />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
