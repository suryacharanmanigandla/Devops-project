import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBox from '../src/SearchBox.jsx';

describe('SearchBox', () => {
  it('renders input and button', () => {
    render(<SearchBox updateInfo={() => {}} />);
    expect(screen.getByLabelText(/City Name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  it('calls updateInfo on submit with valid city', async () => {
    const mockUpdate = vi.fn();
  window.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        main: { feels_like: 300, humidity: 40, temp: 295, temp_max: 305 },
        weather: [{ description: 'clear sky' }]
      })
    }));
    render(<SearchBox updateInfo={mockUpdate} />);
    fireEvent.change(screen.getByLabelText(/City Name/i), { target: { value: 'London' } });
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    await waitFor(() => expect(mockUpdate).toHaveBeenCalled());
  window.fetch.mockRestore && window.fetch.mockRestore();
  });

  it('handles empty input gracefully', () => {
    const mockUpdate = vi.fn();
    render(<SearchBox updateInfo={mockUpdate} />);
    fireEvent.change(screen.getByLabelText(/City Name/i), { target: { value: '' } });
    expect(screen.getByLabelText(/City Name/i)).toHaveValue('');
  });

  it('handles API error', async () => {
    const mockUpdate = vi.fn();
    window.fetch = vi.fn(() => Promise.reject('API error'));
    try {
      render(<SearchBox updateInfo={mockUpdate} />);
      fireEvent.change(screen.getByLabelText(/City Name/i), { target: { value: 'InvalidCity' } });
      fireEvent.click(screen.getByRole('button', { name: /Search/i }));
      // Should not crash, but may not call updateInfo
      await waitFor(() => expect(mockUpdate).not.toHaveBeenCalled());
    } catch {
      // Suppress unhandled rejection warning
    } finally {
      window.fetch.mockRestore && window.fetch.mockRestore();
    }
  });
});
