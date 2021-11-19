import React, { useState } from "react";
import NavBar from "../components/NavBar";
import api from "../services/api";

import "./index.css";

function Edit() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [privacity, setPrivacity] = useState(true);

  const handleEditFlashcards = async () => {
    const data = {
      nome: name,
      descricao: description,
      publico: privacity,
    };
    await api.put(`api/colecoes/${id}`, data);
    setId("");
    setName("");
    setDescription("");
    setPrivacity(true);
  };

  const handleDeleteFlashcards = async () => {
    await api.delete(`api/colecoes/${id}`);
    setId("");
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="home-page">
        <h2>
          Edit FlashCard -
          <input
            type="text"
            value={id}
            placeholder="ID"
            required
            onChange={(value) => setId(value.target.value)}
          ></input>
        </h2>
        <div className="forms">
          <form>
            <h3>Editar FlashCard</h3>
            <p>Nome</p>
            <input
              type="text"
              value={name}
              placeholder="Nome"
              required
              onChange={(value) => setName(value.target.value)}
            ></input>
            <p>Descriçao</p>
            <input
              type="text"
              value={description}
              placeholder="Descriçao"
              required
              onChange={(value) => setDescription(value.target.value)}
            ></input>
            <p>Privacidade</p>
            <select
              value={privacity}
              required
              onChange={(value) => setPrivacity(value.target.value)}
            >
              <option value={true}>Publico</option>
              <option value={false}>Privado</option>
            </select>
            <button type="button" onClick={() => handleEditFlashcards()}>
              Editar FlashCard
            </button>
          </form>
          <form>
            <h3>Deletar FlashCard</h3>
            <button type="button" onClick={() => handleDeleteFlashcards()}>
              Deletar FlashCard
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
