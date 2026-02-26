// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuantumEVM title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuantumEVM/i);
    expect(titleElement).toBeInTheDocument();
});
