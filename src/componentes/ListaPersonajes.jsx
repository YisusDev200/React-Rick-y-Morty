import Personajes from "./Personajes";
import { useEffect, useState } from "react";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      {page == 1 ? (
        <button
        className="btn btn-primary btn-sm">
        Página
      </button>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Página {page - 1}{" "}
        </button>
      )}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Página {page + 1}{" "}
      </button>
    </header>
  );
}

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function GetDatos() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setPersonajes(data.results);
      setloading(false);
    }
    GetDatos();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <div className="row">
          {personajes.map((pers) => {
            return (
              <div className="col-md-6" key={pers.id}>
                <Personajes pers={pers} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default ListaPersonajes;
