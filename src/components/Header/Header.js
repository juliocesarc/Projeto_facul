import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // Importar o arquivo de estilos

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/form")}>Form</button>
    </header>
  );
}

export default Header;
