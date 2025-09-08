
import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
// Test file for App component
import App from '../src/App.jsx';

describe('App Integration', () => {
  it('renders WeatherApp', () => {
    render(<App />);
    expect(screen.getByLabelText(/Enter City/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument();
  });
});
