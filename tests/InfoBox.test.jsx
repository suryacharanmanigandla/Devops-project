import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InfoBox from '../src/InfoBox.jsx';

describe('InfoBox', () => {
  const mockWeather = {
    city: 'Paris',
    atmosphere: 'clear sky',
    feels_like: 290,
    humidity: 50,
    temp: 288,
    temp_max: 292
  };

  it('renders weather data', () => {
    render(<InfoBox weatherData={mockWeather} />);
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
    expect(screen.getByText(/humidity = 50/i)).toBeInTheDocument();
    expect(screen.getByText(/temp = 288/i)).toBeInTheDocument();
    expect(screen.getByText(/feels_like = 290/i)).toBeInTheDocument();
    expect(screen.getByText(/temp_max = 292/i)).toBeInTheDocument();
  });

  it('handles missing weather data gracefully', () => {
    render(<InfoBox weatherData={{}} />);
    expect(screen.getByText(/Weather Information/i)).toBeInTheDocument();
  });
});
