import React from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";
import { Route, Routes, HashRouter } from "react-router-dom";
import FaqPage from "./Pages/Faq/FaqPage.js";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Faq" element={<FaqPage/>}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
