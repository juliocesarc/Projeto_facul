import React from "react";
import Aluno from "../components/Aluno/Aluno"
import { Link } from "react-router-dom";

function Home({alunos}) {
  return (
    <div>
      <h1>Listagem de alunos</h1>

      {alunos.map(aluno => (
        <Link to={`/edit-user/${aluno.id}`}>
          <Aluno name={aluno.name} role={aluno.role} />
        </Link>
      ))}
      
    </div>
  );
}

export default Home;
