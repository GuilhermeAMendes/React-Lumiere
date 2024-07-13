import React, { useState, useEffect } from "react";
import "./Index.css";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function getQuests() {
      try {
        let res = await fetch("http://localhost:5000/faqs");
        let data = await res.json();
        setFaqs(data);
      } catch (e) {
        console.log(e);
        console.log(e.name);
        console.log(e.message);
      }
    }
    getQuests();
  }, []);

  return (
    <div id="faq">
      {faqs.map((item, index) => (
        <details key={index}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default Faq;
