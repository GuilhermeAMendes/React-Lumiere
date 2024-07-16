import React from "react";
import FetchFaq from "../../Hooks/Fetch/Faq";
import "./Index.css";

function Faq() {
  return (
    <div id="faq">
      <FetchFaq
        render={(faqs) =>
          faqs.map((item) => (
            <details key={item.id}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))
        }
      />
    </div>
  );
}

export default Faq;
