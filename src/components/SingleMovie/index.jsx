// Hooks
import { useSingleMovie } from "./hooks";

export default function SingleMovie() {
  const { movie, error, handleBack } = useSingleMovie();

  return (
    <div className="card page-card">
      <div className="card-header">
        <h2 className="h5 mb-0">
          <i className="bi bi-film me-2 text-primary"></i>
          Detalhes do filme
        </h2>
      </div>

      <div className="card-body">
        {error && (
          <div className="alert alert-danger mb-0">
            <i className="bi bi-exclamation-triangle me-2"></i>
            Filme não encontrado.
          </div>
        )}

        {!error && !movie && (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        )}

        {movie && (
          <>
            <h3 className="h4 mb-2">{movie.name}</h3>
            <span className="badge rounded-pill text-bg-primary mb-4">
              {movie.genero}
            </span>

            <dl className="row movie-info mb-0">
              <dt className="col-4">ID</dt>
              <dd className="col-8">{movie.id}</dd>

              <dt className="col-4">Gênero</dt>
              <dd className="col-8">{movie.genero}</dd>

              <dt className="col-4">Ano</dt>
              <dd className="col-8">{movie.ano}</dd>
            </dl>
          </>
        )}

        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-outline-secondary" onClick={handleBack}>
            <i className="bi bi-arrow-left me-1"></i>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
