// Hooks
import { useForm } from "./hooks";

export default function Form() {
  const { movie, saving, handleChange, handleBack, handleSubmit } = useForm();

  return (
    <div className="card page-card">
      <div className="card-header">
        <h2 className="h5 mb-0">
          <i className="bi bi-plus-circle me-2 text-primary"></i>
          Cadastrar filme
        </h2>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="name"
              placeholder="Ex.: O Poderoso Chefão"
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
                placeholder="Ex.: Drama"
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
                placeholder="Ex.: 1972"
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
              {saving ? "Salvando..." : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
