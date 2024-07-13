import React, { useState, useEffect } from "react";
import "./Index.css";

function Main() {
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
    <main>
      <blockquote>
        {`"${cite}"`}
        <span>{`- ${author}`}</span>
      </blockquote>
      <img src="/Images/Componente_1.png" alt="Library" />
    </main>
  );
}

export default Main;
