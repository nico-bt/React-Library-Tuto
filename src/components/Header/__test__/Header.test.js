import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Getting element by text
it('should render the same text that is passed in props', () => {
  render(<Header title="Hello" />);
  const headingElement = screen.getByText("Hello");
  expect(headingElement).toBeInTheDocument();
});

// Getting element by role and content
it('should render the same text that is passed', () => {
  render(<Header title="Titulo aqui" />);
  const headingElement = screen.getByRole("heading", { name: "Titulo aqui"});
  expect(headingElement).toBeInTheDocument();
});

// Getting element by testId, the element needs to have --> data-testid="x"
it('should render the same text', () => {
  render(<Header title="Gol" />);
  const headingElement = screen.getByTestId("titulo");
  expect(headingElement).toBeInTheDocument();
});

// QueryBy --> No tira error si no encuentra el elemento. Devuelve null
// FindBy --> Para usar con async/await