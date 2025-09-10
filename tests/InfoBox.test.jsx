import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import InfoBox from '../src/InfoBox.jsx';

describe('InfoBox', () => {
  const mockWeatherData = {
    temp: 293.15, // 20°C
    feels_like: 290.15, // 17°C
    temp_max: 295.15, // 22°C
    humidity: 75,
    city: 'London',
    atmosphere: 'clear sky'
  };

  it('renders weather data', () => {
    render(<InfoBox weatherData={mockWeatherData} />);
    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText(/^Temperature:$/)).toBeInTheDocument();
    expect(screen.getByText(/^Feels like:$/)).toBeInTheDocument();
    expect(screen.getByText(/^Max Temperature:$/)).toBeInTheDocument();
    expect(screen.getByText(/^Humidity:$/)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
  });

  it('handles missing weather data gracefully', () => {
    render(<InfoBox weatherData={null} />);
    expect(screen.queryByText('London')).not.toBeInTheDocument();
  });
});
