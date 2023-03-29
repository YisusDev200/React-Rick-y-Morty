import ListaPersonajes from "./componentes/ListaPersonajes";
import './app.css';

function App() {
  return (
    <div className={'todo'}>
      <h1 className="text-center display-1 py-4">Rick end morty</h1>
      <ListaPersonajes />
    </div>
  );
}

export default App;
