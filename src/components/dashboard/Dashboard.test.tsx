import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import { WeatherContext } from '../../contexts/WeatherContext';

// Mocked weather info for testing
const mockWeatherInfo = {
    name: 'TestCity',
    sys: { country: 'TestCountry' },
    main: { temp: 25 },
    wind: { speed: 10 },
    clouds: { all: 50 },
    weather: [{ id: 1, main: 'Clouds', description: 'Cloudy' }],
};

test('renders Dashboard component with weather information', () => {
    // Render the Dashboard component with mocked WeatherContext value
    const { getByText } = render(
        <WeatherContext.Provider value={[mockWeatherInfo]}>
            <Dashboard />
        </WeatherContext.Provider>
    );

    // Assert that SwitchLang and CiCalendarDate components are rendered
    expect(getByText('SwitchLang')).toBeInTheDocument();
    expect(getByText('CiCalendarDate')).toBeInTheDocument();

    // Assert that WeatherCard component is rendered
    expect(getByText(/TestCity, TestCountry/i)).toBeInTheDocument();
    expect(getByText(/25°C/i)).toBeInTheDocument();
});

test('renders Dashboard component without weather information', () => {
    // Render the Dashboard component without WeatherContext value
    const { getByText, queryByText } = render(
        <WeatherContext.Provider value={[null]}>
            <Dashboard />
        </WeatherContext.Provider>
    );

    // Assert that SwitchLang and CiCalendarDate components are rendered
    expect(getByText('SwitchLang')).toBeInTheDocument();
    expect(getByText('CiCalendarDate')).toBeInTheDocument();

    // Assert that WeatherCard component is not rendered
    expect(queryByText(/TestCity, TestCountry/i)).toBeNull();
    expect(queryByText(/25°C/i)).toBeNull();
});
