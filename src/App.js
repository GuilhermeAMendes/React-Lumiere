import React, { useState, useEffect } from "react";
import { Header, Main, Faq, Footer } from "./Components/Main/";
import "./Main.css";

function App() {
  const [page] = useState("Início");
  const [anchor_1] = useState("Usuários");
  const [anchor_2] = useState("Livros");
  const [cite, setCite] = useState("");
  const [author, setAuthor] = useState("");
  const [quests] = useState([
    {
      textQuest: "Como posso fazer meu cadastro?",
      textResponse: "Você pode usar a barra de pesquisa no topo da página ou navegar pelas categorias disponíveis na seção de livros.",
    },
    {
      textQuest: "Como faço para atualizar meus dados cadastrais?",
      textResponse: "Para atualizar seus dados de cadastro, vá à sua conta utilizando a seção Clientes, Adicione o seu identificador e informações desejadas para atualização e após o procedimento clique em atualizar dados.",
    },
    {
      textQuest: "Como posso encontrar um livro específico?",
      textResponse: "Você pode usar a barra de pesquisa no topo da página ou navegar pelas categorias disponíveis na seção de livros.",
    }
  ]);

  useEffect(() => {
    async function getCite() {
      try {
        const res = await fetch("https://type.fit/api/quotes");
        let data = await res.json();
        let randomIndex = Math.floor(Math.random() * data.length);
        setCite(data[randomIndex].text);
        setAuthor(
          data[randomIndex].author ? data[randomIndex].author : "Desconhecido"
        );
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
      <Faq faqs={quests}/>
      <Footer />
    </div>
  );
}

export default App;
