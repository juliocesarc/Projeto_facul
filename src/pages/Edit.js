import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BodyForm from "../components/BodyForm";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

function Edit({alunos, setAlunos}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
  
    useEffect(() => {
      const aluno = alunos.find(aluno => aluno.id == id);
        console.log(aluno)
      if (aluno) {
        setName(aluno.name);
        setRole(aluno.role);
      }
    }, [id, alunos]);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleRoleChange = (e) => {
      setRole(e.target.value);
    };
  
    const handleSubmit = () => {
      const updatedAlunos = alunos.map(aluno => 
        aluno.id == id ? { ...aluno, name, role } : aluno
      );
      setAlunos(updatedAlunos);
      navigate('/');
    };

    return (
        <BodyForm>
        <h1>Editar Informações do Aluno</h1>
  
        <Input placeholder="Nome" value={name} onChange={handleNameChange} />
        <Select value={role} onChange={handleRoleChange}>
          <option value="Aluno">Aluno</option>
          <option value="Professor">Professor</option>
          <option value="Monitor">Monitor</option>
        </Select>
  
        <Button type="button" onClick={handleSubmit}>Salvar</Button>
      </BodyForm>
    );
}

export default Edit;
