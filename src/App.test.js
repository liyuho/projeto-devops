import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task list title', () => {
  render(<App />);

  const titleElement = screen.getByText(/minha lista de tarefas/i);

  expect(titleElement).toBeInTheDocument();
});