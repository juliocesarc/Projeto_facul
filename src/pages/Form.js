import React, { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import BodyForm from "../components/BodyForm";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Form({alunos, setAlunos}) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * (99999999 - 1 + 1)) + 1
    setAlunos([...alunos, { id, name, role }]);
    console.log(alunos)
    navigate('/');
  };

  return (
    <BodyForm>
      <h1>Página de Formulário</h1>

      <Input placeholder="Nome" value={name} onChange={handleNameChange}/>
      <Select value={role} onChange={handleRoleChange}>
        <option value="Aluno">Aluno</option>
        <option value="Professor">Professor</option>
        <option value="Monitor">Monitor</option>
      </Select>

      <Button type="Button" onClick={handleSubmit}>Cadastrar</Button>
    </BodyForm>
  );
}

export default Form;
