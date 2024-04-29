import React from 'react';
import { render } from '@testing-library/react';
import WeatherItem from './WeatherItem';

test('renders WeatherItem component with Clouds weather', () => {
    const mockCloudsItem = {
        main: 'Clouds',
        description: 'Partly cloudy',
    };

    const { getByText, getByRole } = render(<WeatherItem item={mockCloudsItem} />);

    const weatherIcon = getByRole('img');
    const weatherMainText = getByText(/Clouds/i);
    const weatherDescriptionText = getByText(/Partly cloudy/i);

    expect(weatherIcon).toBeInTheDocument();
    expect(weatherMainText).toBeInTheDocument();
    expect(weatherDescriptionText).toBeInTheDocument();
});

test('renders WeatherItem component with Rain weather', () => {
    const mockRainItem = {
        main: 'Rain',
        description: 'Heavy rain',
    };

    const { getByText, getByRole } = render(<WeatherItem item={mockRainItem} />);

    const weatherIcon = getByRole('img');
    const weatherMainText = getByText(/Rain/i);
    const weatherDescriptionText = getByText(/Heavy rain/i);

    expect(weatherIcon).toBeInTheDocument();
    expect(weatherMainText).toBeInTheDocument();
    expect(weatherDescriptionText).toBeInTheDocument();
});

test('renders WeatherItem component with Wind weather', () => {
    const mockWindItem = {
        main: 'Wind',
        description: 'Strong wind',
    };

    const { getByText, getByRole } = render(<WeatherItem item={mockWindItem} />);

    const weatherIcon = getByRole('img');
    const weatherMainText = getByText(/Wind/i);
    const weatherDescriptionText = getByText(/Strong wind/i);

    expect(weatherIcon).toBeInTheDocument();
    expect(weatherMainText).toBeInTheDocument();
    expect(weatherDescriptionText).toBeInTheDocument();
});
