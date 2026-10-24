// External libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useForm() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [movie, setMovie] = useState({
    name: "",
    genero: "",
    ano: "",
  });

  function handleChange(field, value) {
    setMovie({ ...movie, [field]: value });
  }

  function handleBack() {
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    axios
      .post("https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes", movie)
      .then(() => {
        alert("Filme cadastrado com sucesso!");
        handleBack();
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar o filme!");
      })
      .finally(() => setSaving(false));
  }

  return { movie, saving, handleChange, handleBack, handleSubmit };
}
