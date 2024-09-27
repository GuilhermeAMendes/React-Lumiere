import { useState, useEffect } from "react";
const FetchFaq = ({ render }) => {
  const [FAQs, setFaq] = useState([]);
  useEffect(() => {
    const getFaqs = async () => {
      try {
        const res = await fetch("/Data/Faq.json");
        const data = await res.json();
        setFaq(data.faqs);
      } catch (e) {
        console.log(
          `Ocorreu um erro ao tentar capturar os dados de FAQs, ${e}`
        );
      }
    };
    getFaqs();
  }, []);
  return <>{render(FAQs)}</>;
};

export default FetchFaq;
