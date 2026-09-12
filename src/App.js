import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Minha Lista de Tarefas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
        />

        <button>Adicionar</button>
      </div>
    </div>
  );
}

export default App;