import React, { useState, useEffect } from "react";
import View from "../../../Components/View/Index";

const dataUsers = "/Data/Users.json";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const findAllUsers = async () => {
      try {
        const res = await fetch(dataUsers);
        const data = await res.json();
        setUsers(data.users || []);
      } catch (e) {
        console.error(
          "Ocorreu um erro ao tentar buscar os dados dos usuários.",
          e
        );
      }
    };

    findAllUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <View info={users} />
      ) : (
        <View info="Não existem dados para serem recuperados. Insira alguns e tente novamente." />
      )}
    </div>
  );
};

export default FetchUsers;
