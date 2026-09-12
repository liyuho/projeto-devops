import { useState } from 'react';
import './App.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') {
      return;
    }

    const novaTarefa = {
      texto: tarefa,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setTarefa('');
  }

  function concluirTarefa(index) {
    const novasTarefas = [...tarefas];

    novasTarefas[index].concluida = !novasTarefas[index].concluida;

    setTarefas(novasTarefas);
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
          <li
            key={index}
            onClick={() => concluirTarefa(index)}
            style={{
              textDecoration: item.concluida ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {item.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;