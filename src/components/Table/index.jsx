// Hooks
import { useTable } from "./hooks";

export default function Table() {
  const { movies, loading, error, handleDetails } = useTable();

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3 text-muted">Carregando filmes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center">
        <i className="bi bi-exclamation-triangle me-2"></i>
        Não foi possível carregar os filmes.
      </div>
    );
  }

  return (
    <div className="mx-auto" style={{ maxWidth: "900px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">
          <i className="bi bi-collection-play me-2"></i>
          Filmes
        </h2>
        <span className="badge bg-secondary">{movies.length} filmes</span>
      </div>

      {movies.length === 0 ? (
        <div className="alert alert-info text-center">
          Nenhum filme cadastrado.
        </div>
      ) : (
        <div className="table-responsive movies-table">
          <table className="table table-hover align-middle mb-0 bg-white">
            <thead>
              <tr>
                <th scope="col" className="text-center">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Gênero</th>
                <th scope="col" className="text-center">Ano</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id} onClick={() => handleDetails(movie.id)}>
                  <td className="text-center text-muted">{movie.id}</td>
                  <td className="fw-medium">
                    <i className="bi bi-film me-2 text-secondary"></i>
                    {movie.name}
                  </td>
                  <td>
                    <span className="badge rounded-pill text-bg-light border">
                      {movie.genero}
                    </span>
                  </td>
                  <td className="text-center">{movie.ano}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
