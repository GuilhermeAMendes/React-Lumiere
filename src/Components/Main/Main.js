import React from "react";

export const Main = ({ quote, author }) => {
  return (
    <main>
      <blockquote>
        {`"${quote}"`}
        <span>{`- ${author}`}</span>
      </blockquote>
      <img src="/Images/Componente_1.png" alt="Library" />
    </main>
  );
};

export default Main;
