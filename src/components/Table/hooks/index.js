// External libraries
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Context
import { MovieContext } from "@/context/MovieContext";

export function useTable() {
  const navigate = useNavigate();
  const { movies, setMovies } = useContext(MovieContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    axios
      .get("https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes")
      .then((res) => setMovies(res.data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [setMovies]);

  return { movies, loading, error, handleDetails };
}
