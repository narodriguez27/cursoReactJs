
import './App.css';
import Cabecera from './components/Cabecera';
import PieDePagina from './components/pieDePagina';
import NavBar from './components/Navbar';
import Count from './components/Count';
import CountFunction from './components/CountFunction';
import ListRecipes from './components/ListRecipes';
function App() {
  return (
    <> 
      <Cabecera titulo = "ComidApp" />
      <NavBar />
      <ListRecipes />
      <Count />
      <CountFunction />
      <PieDePagina texto = "CopyRight 2022. EducacionIT" />
    </>
  );
}

export default App;
