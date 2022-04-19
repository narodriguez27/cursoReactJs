
import './App.css';
import Cabecera from './components/Cabecera';
import PieDePagina from './components/pieDePagina';
import NavBar from './components/Navbar';
function App() {
  return (
    <> 
      <Cabecera titulo = "ComidApp" />
      <NavBar />
      <PieDePagina texto = "CopyRight 2022. EducacionIT" />
    </>
  );
}

export default App;
