import { useState } from "react";

const dataUsers = "/Data/Users.json";

const useFetchOne = () => {
  const [one, setOne] = useState(null);

  const fetchOneUser = async (id) => {
    try {
      const res = await fetch(dataUsers);
      const data = await res.json();
      const user = data.users.find((element) => element.CPF === id);
      setOne(user || { CPF: "", name: "", street: "", nro: "", CEP: "", emails: [], telephones: [], birthday: "", profession: "" });
    } catch (e) {
      console.error("Ocorreu um erro ao tentar buscar o usuário especificado.", e);
    }
  };

  return { one, fetchOneUser };
};

export default useFetchOne;
