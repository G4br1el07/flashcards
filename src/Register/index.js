import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import api from "../services/api";
import "./index.css";

function Register() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [privacity, setPrivacity] = useState(true);

  const handlePostFlashcards = async (e) => {
    e.preventDefault();
    const data = {
      colecaoId: list.length + 1,
      nome: name,
      descricao: description,
      publico: privacity,
    };
    await api
      .post("api/colecoes", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((index) => console.log(index));
  };

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
        <h2>Create FlashCard</h2>
        <form>
          <p>
            <strong>Nome do flashcard</strong>
          </p>
          <input
            type="text"
            value={name}
            required
            onChange={(value) => setName(value.target.value)}
          ></input>
          <p>
            <strong>Descrição</strong>
          </p>
          <input
            type="text"
            value={description}
            required
            onChange={(value) => setDescription(value.target.value)}
          ></input>
          <p>
            <strong>Publico ou Privado</strong>
          </p>
          <select
            value={privacity}
            required
            onChange={(value) => setPrivacity(value.target.value)}
          >
            <option value={true}>Publico</option>
            <option value={false}>Privado</option>
          </select>
          <button type="submit" className="post" onClick={handlePostFlashcards}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
