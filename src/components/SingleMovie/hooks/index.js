// External libraries
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function useSingleMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    axios
      .get("https://6add2c15fa5e73d4ab2de65f.mockapi.io/api/filme/filmes/" + id)
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [id]);

  return { movie, error, handleBack };
}
