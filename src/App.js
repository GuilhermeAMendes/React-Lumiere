import React, { useState, useEffect } from "react";
import { Header, Main, Faq, Footer } from "./Components/Main/";
import "./Main.css";

function App() {
  const [page] = useState("Início");
  const [anchor_1] = useState("Usuários");
  const [anchor_2] = useState("Livros");
  const [cite, setCite] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function getCite() {
      try {
        const res = await fetch("https://type.fit/api/quotes");
        let data = await res.json();
        let index = Math.floor(Math.random() * data.length);
        setCite(data[index].text);
        setAuthor(data[index].author ? data[index].author : "Desconhecido");
      } catch (e) {
        console.log(e);
        console.log(e.name);
        console.log(e.message);
      }
    }
    getCite();
  }, []);

  return (
    <div>
      <Header current_page={page} anchor_1={anchor_1} anchor_2={anchor_2} />
      <Main quote={cite} author={author} />
      <Faq/>
      <Footer />
    </div>
  );
}

export default App;
