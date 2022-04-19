import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cabecera from './components/Cabecera';

function App() {
  return (
    <div>
      <Cabecera titulo = 'Bienvenidos a ReactJs' />
      <main className='container'>
        Resto de la aplicacion
      </main>
    </div>
  );
}

export default App;
