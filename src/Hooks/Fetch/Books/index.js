import { useState, useEffect } from "react";

export default FetchBooks = ({ render }) => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("/Data/Books.json");
        const data = await res.json();
        setBooks(data.books);
      } catch (e) {
        console.log(
          `Ocorreu um erro ao tentar capturar os dados de livros, ${e}`
        );
      }
    };
    getBooks();
  }, []);
  return <>{render(Books)}</>;
};
