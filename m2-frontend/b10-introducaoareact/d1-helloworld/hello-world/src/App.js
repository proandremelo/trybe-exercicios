import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Varrer a casa', 'Lavar a louça', 'Passar pano', 'Estudar', 'Tocar']

function App() {
  return (
    <div className="App">
      <ul>Tarefas
      {compromissos.map((compromisso) => Task(compromisso))}
      </ul>
    </div>
  );
}

export default App;
