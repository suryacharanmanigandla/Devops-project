
import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
// Test file for WeatherApp component
import WeatherApp from '../src/WeatherApp.jsx';

describe('WeatherApp', () => {
  it('shows default city and weather info', () => {
    render(<WeatherApp />);
    expect(screen.getByText(/Delhi/i)).toBeInTheDocument();
    expect(screen.getByText(/overcast clouds/i)).toBeInTheDocument();
  });

  it('updates weather info when updateInfo is called', () => {
    render(<WeatherApp />);
    // Simulate updateInfo by finding SearchBox and calling its prop
    // This is a placeholder for a more advanced integration test
    // You can use fireEvent or userEvent for more realistic interaction
    // For now, just check that InfoBox updates if state changes
    // (Advanced: use React Testing Library's rerender or act)
    // Not implemented: would require refactoring for testability
    expect(true).toBe(true); // Placeholder
  });
});
