import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Header from "./components/Header/Header";
import Edit from "./pages/Edit";

const PageTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

function App() {
  const [alunos, setAlunos] = useState([])

  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={
              <PageTitle title="Listagem de alunos">
                <Home alunos={alunos}/>
              </PageTitle>
            } />
            <Route path="/form" element={
              <PageTitle title="Cadastro de aluno">
                <Form alunos={alunos} setAlunos={setAlunos}/>
              </PageTitle>
            } />
            <Route path="/edit-user/:id" element={
              <PageTitle title="Edição de aluno">
                <Edit alunos={alunos} setAlunos={setAlunos} />
              </PageTitle>
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
