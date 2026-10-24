// Hooks
import { useFormUpdate } from "./hooks";

export default function FormUpdate() {
  const {
    id,
    setId,
    movie,
    saving,
    handleChange,
    handleBack,
    handleSearch,
    handleUpdate,
  } = useFormUpdate();

  return (
    <div className="card page-card">
      <div className="card-header">
        <h2 className="h5 mb-0">
          <i className="bi bi-pencil-square me-2 text-primary"></i>
          Alterar filme
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
          <form onSubmit={handleUpdate} className="mt-4 pt-4 border-top">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                required
                className="form-control"
                id="name"
                value={movie.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="row">
              <div className="col-sm-8 mb-3">
                <label htmlFor="genero" className="form-label">
                  Gênero
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="genero"
                  value={movie.genero}
                  onChange={(e) => handleChange("genero", e.target.value)}
                />
              </div>

              <div className="col-sm-4 mb-3">
                <label htmlFor="ano" className="form-label">
                  Ano
                </label>
                <input
                  type="number"
                  required
                  min="1888"
                  max="2100"
                  className="form-control"
                  id="ano"
                  value={movie.ano}
                  onChange={(e) => handleChange("ano", e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleBack}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                <i className="bi bi-check-lg me-1"></i>
                {saving ? "Salvando..." : "Alterar"}
              </button>
            </div>
          </form>
        )}

        {!movie && (
          <div className="d-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleBack}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
