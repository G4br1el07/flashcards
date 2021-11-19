import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

import api from "../services/api";
import "./index.css";

function Courses() {
  const [list, setList] = useState([]);

  const handleFlashcards = async () => {
    const response = await api.get("api/colecoes");
    setList(response.data);
  };

  useEffect(() => {
    handleFlashcards();
  });

  return (
    <>
      <NavBar></NavBar>
      <div className="home-page">
        <h1>Cursos</h1>
        <section className="flashcard-list">
          {list.map((index) => (
            <div className="flashcard" key={index.colecaoId}>
              <h3>{index.nome}</h3>
              <p>
                <strong>ID:</strong> {index.colecaoId}
              </p>
              <p>
                <strong>Descricao:</strong> {index.descricao}
              </p>
              <p>{index.publico ? "Público" : "Privado"}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Courses;
