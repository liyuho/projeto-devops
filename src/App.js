import { useState } from 'react';
import './App.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') {
      return;
    }

    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }

  return (
    <div className="app">
      <h1>Minha Lista de Tarefas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />

        <button onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;