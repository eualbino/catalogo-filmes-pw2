// Hooks
import { useFormDelete } from "./hooks";

export default function FormDelete() {
  const { id, setId, movie, deleting, handleBack, handleSearch, handleDelete } =
    useFormDelete();

  return (
    <div className="card page-card">
      <div className="card-header">
        <h2 className="h5 mb-0">
          <i className="bi bi-trash me-2 text-danger"></i>
          Apagar filme
        </h2>
      </div>

      <div className="card-body">
        <form onSubmit={handleSearch}>
          <label htmlFor="id" className="form-label">
            ID do filme
          </label>
          <div className="input-group">
            <input
              type="text"
              required
              className="form-control"
              id="id"
              placeholder="Digite o ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">
              <i className="bi bi-search me-1"></i>
              Procurar
            </button>
          </div>
        </form>

        {movie && (
          <div className="mt-4 pt-4 border-top">
            <dl className="row movie-info mb-0">
              <dt className="col-4">ID</dt>
              <dd className="col-8">{movie.id}</dd>

              <dt className="col-4">Nome</dt>
              <dd className="col-8">{movie.name}</dd>

              <dt className="col-4">Gênero</dt>
              <dd className="col-8">{movie.genero}</dd>

              <dt className="col-4">Ano</dt>
              <dd className="col-8">{movie.ano}</dd>
            </dl>

            <div className="alert alert-warning small mt-3 mb-0">
              <i className="bi bi-exclamation-triangle me-1"></i>
              Essa ação não pode ser desfeita.
            </div>
          </div>
        )}

        <div className="d-flex justify-content-end gap-2 mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleBack}
          >
            Cancelar
          </button>
          {movie && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={deleting}
            >
              <i className="bi bi-trash me-1"></i>
              {deleting ? "Apagando..." : "Apagar"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
