import React, { useState, useEffect } from "react";
import Buttons from "./Subcomponents/Buttons/Buttons";
import Inputs from "./Subcomponents/Inputs/Inputs";
import "./Index.css";
import View from "./Subcomponents/View";
import useFetchAll from "../../Hooks/Fetch/Users/useFetchAll";
import useFetchOne from "../../Hooks/Fetch/Users/useFetchOne";

function UsersPage() {
  const { users, fetchAllUsers } = useFetchAll();
  const { one, fetchOneUser } = useFetchOne();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (one) {
      setSelectedUser(one);
    }
  }, [one]);

  const handleFetchOneUser = async (id) => {
    await fetchOneUser(id);
  };

  return (
    <div>
      <main id="mainUsers">
        <img src="/Images/Componente_2.png" alt="plants and books" />
        <Inputs handleFetchOneUser={handleFetchOneUser} />
        <Buttons fetchAllUsers={fetchAllUsers} fetchOneUser={handleFetchOneUser} />
        <View info={selectedUser ? [selectedUser] : users} />
      </main>
    </div>
  );
}

export default UsersPage;
