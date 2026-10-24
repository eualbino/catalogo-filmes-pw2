// External libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useFormDelete() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [movie, setMovie] = useState(null);
  const [deleting, setDeleting] = useState(false);

  function handleBack() {
    navigate("/");
  }

  function handleSearch(e) {
    e.preventDefault();
    axios
      .get(`https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.error(err);
        alert("Filme não encontrado!");
        setMovie(null);
      });
  }

  function handleDelete() {
    if (!confirm(`Deseja realmente apagar "${movie.name}"?`)) return;

    setDeleting(true);
    axios
      .delete(`https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes/${movie.id}`)
      .then(() => {
        alert("Filme deletado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao deletar o filme!");
      })
      .finally(() => setDeleting(false));
  }

  return { id, setId, movie, deleting, handleBack, handleSearch, handleDelete };
}
