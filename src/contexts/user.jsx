import { createContext, useState } from "react";

export const userContext = createContext({});

function UserProvider({ children }) {
  const [alunos, setAlunos] = useState("Josué");
  const [qtdAlunos, setQtdAlunos] = useState(85);
  return (
    <userContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
      {children}
    </userContext.Provider>
  );
}
export default UserProvider;
