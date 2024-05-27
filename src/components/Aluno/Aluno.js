import React from "react";
import "./Aluno.css";

function Aluno({name, role}) {
  return (
    <div id="principal">
        <p>{name}</p>
        <span>{role}</span>
    </div>
  );
}

export default Aluno;
