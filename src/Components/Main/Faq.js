import React from "react";

export const Faq = ({ faqs }) => {
  return (
    <div id="faq">
      <h2>Perguntas Frequentes</h2>
      {faqs.map((item, index) => (
        <details key={index}>
          <summary>{item.textQuest}</summary>
          <p>{item.textResponse}</p>
        </details>
      ))}
    </div>
  );
};

export default Faq;
