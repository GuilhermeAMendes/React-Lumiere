import React from "react";
import Header from "./Components/Header/Index.js";
import Main from "./Components/Main/Index.js";
import Footer from "./Components/Footer/Index.js";
import FaqPage from "./Pages/Faq/Index.js";
import UsersPage from "./Pages/Users/Index.js";
import BooksPage from "./Pages/Books/Index.js";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Users" element={<UsersPage/>}/>
          <Route path="/Books" element={<BooksPage/>}/>
          <Route path="/Faq" element={<FaqPage/>}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
