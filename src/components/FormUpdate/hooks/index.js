// External libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useFormUpdate() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [movie, setMovie] = useState(null);
  const [saving, setSaving] = useState(false);

  function handleChange(field, value) {
    setMovie({ ...movie, [field]: value });
  }

  function handleBack() {
    navigate("/");
  }

  function handleSearch(e) {
    e.preventDefault();
    axios
      .get(`https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Filme não encontrado!");
        setMovie(null);
      });
  }

  function handleUpdate(e) {
    e.preventDefault();
    setSaving(true);
    axios
      .put(`https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes/${movie.id}`, movie)
      .then(() => {
        alert("Filme atualizado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao atualizar!");
      })
      .finally(() => setSaving(false));
  }

  return { id, setId, movie, saving, handleChange, handleBack, handleSearch, handleUpdate };
}
