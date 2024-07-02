import React from "react";

export const Faq = () => {
  return (
    <div id="faq">
      <h2>Perguntas Frequentes</h2>
      <details>
        <summary>Como posso fazer meu cadastro?</summary>
        <p>
          Você pode usar a barra de pesquisa no topo da página ou navegar pelas
          categorias disponíveis na seção de livros.
        </p>
      </details>
      <details>
        <summary>Como faço para atualizar meus dados cadastrais?</summary>
        <p>
          Para atualizar seus dados de cadastro, vá à sua conta utilizando a
          seção Clientes, Adicione o seu identificador e informações desejadas
          para atualização e após o procedimento clique em atualizar dados.
        </p>
      </details>
      <details>
        <summary>Como posso encontrar um livro específico?</summary>
        <p>
          Você pode usar a barra de pesquisa no topo da página ou navegar pelas
          categorias disponíveis na seção de livros.
        </p>
      </details>
    </div>
  );
};

export default Faq;
