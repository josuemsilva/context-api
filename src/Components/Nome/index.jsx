import { useContext } from "react";
import { userContext } from "../../contexts/user";

function Nome() {
  const { alunos, setAlunos } = useContext(userContext);
  return (
    <div>
      <span style={{ color: "#FF0000" }}>Bem vindo: {alunos}</span>
      <br />
      <button onClick={() => setAlunos("Lucas")}>Trocar nome</button>
    </div>
  );
}

export default Nome;
