import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from './WeatherCard';
import { WeatherContext } from '../../contexts/WeatherContext';

// Mock WeatherContext value for testing
const mockWeatherInfo = {
    name: 'TestCity',
    sys: { country: 'TestCountry' },
    main: { temp: 25 },
    wind: { speed: 10 },
    clouds: { all: 50 },
    weather: [{ id: 1, main: 'Clouds', description: 'Cloudy' }],
};

test('renders WeatherCard component with weather information', () => {
    // Render the WeatherCard component with mock WeatherContext value
    const { getByText } = render(
        <WeatherContext.Provider value={[mockWeatherInfo]}>
            <WeatherCard />
        </WeatherContext.Provider>
    );

    // Assert that weather information is rendered
    const cityCountryElement = getByText(/TestCity, TestCountry/i);
    const temperatureElement = getByText(/25°C/i);
    const windElement = getByText(/10 km\/h/i);
    const humidityElement = getByText(/50%/i);

    expect(cityCountryElement).toBeInTheDocument();
    expect(temperatureElement).toBeInTheDocument();
    expect(windElement).toBeInTheDocument();
    expect(humidityElement).toBeInTheDocument();
});

test('renders loader when no weather information is available', () => {
    // Render the WeatherCard component without WeatherContext value
    const { getByText } = render(<WeatherCard />);

    // Assert that loader is rendered
    const loaderElement = getByText(/Loading.../i);
    expect(loaderElement).toBeInTheDocument();
});
