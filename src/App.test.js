import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('deve exibir o título da lista de tarefas', () => {
  render(<App />);

  expect(
    screen.getByText(/minha lista de tarefas/i)
  ).toBeInTheDocument();
});

test('deve exibir o campo para digitar uma tarefa', () => {
  render(<App />);

  expect(
    screen.getByPlaceholderText(/digite uma tarefa/i)
  ).toBeInTheDocument();
});

test('deve exibir o botão Adicionar', () => {
  render(<App />);

  expect(
    screen.getByRole('button', { name: /adicionar/i })
  ).toBeInTheDocument();
});

test('deve adicionar uma nova tarefa', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/digite uma tarefa/i);
  const button = screen.getByRole('button', { name: /adicionar/i });

  fireEvent.change(input, {
    target: { value: 'Estudar React' }
  });

  fireEvent.click(button);

  expect(screen.getByText('Estudar React')).toBeInTheDocument();
});

test('deve excluir uma tarefa', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/digite uma tarefa/i);
  const addButton = screen.getByRole('button', { name: /adicionar/i });

  fireEvent.change(input, {
    target: { value: 'Tarefa para excluir' }
  });

  fireEvent.click(addButton);

  expect(screen.getByText('Tarefa para excluir')).toBeInTheDocument();

  const deleteButton = screen.getByRole('button', { name: /excluir/i });

  fireEvent.click(deleteButton);

  expect(
    screen.queryByText('Tarefa para excluir')
  ).not.toBeInTheDocument();
});