import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import App from '../src/App.jsx';

describe('App Integration', () => {
  it('renders WeatherApp', () => {
    render(<App />);
    expect(screen.getByText(/Enter the city/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument();
  });
});
