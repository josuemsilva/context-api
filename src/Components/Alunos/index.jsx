import Nome from "../Nome";
import { useContext } from "react";
import { userContext } from "../../contexts/user";

function Alunos() {
  const { alunos, qtdAlunos } = useContext(userContext);
  return (
    <div>
      <h2>Component Alunos:{qtdAlunos}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;
