import { useState } from "react";

const dataUsers = "/Data/Users.json";

const useFetchAll = () => {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const res = await fetch(dataUsers);
      const data = await res.json();
      setUsers(data.users || []);
    } catch (e) {
      console.error("Ocorreu um erro ao tentar buscar os dados dos usuários.", e);
    }
  };

  return { users, fetchAllUsers };
};

export default useFetchAll;
