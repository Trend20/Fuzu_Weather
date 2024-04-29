import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeContext } from '../../contexts/ThemeContext';

// Mock ThemeContext value for testing
const mockThemeContextValue = {
    theme: 'light',
    toggleTheme: jest.fn(),
};

test('renders ThemeSwitcher component with light theme', () => {
    // Render the ThemeSwitcher component with mock ThemeContext value
    const { getByTestId } = render(
        <ThemeContext.Provider value={mockThemeContextValue}>
            <ThemeSwitcher />
        </ThemeContext.Provider>
    );

    // Assert that the button is rendered with the light theme icon
    const buttonElement = getByTestId('theme-switcher-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-black-2');
});

test('clicking on the ThemeSwitcher button toggles the theme', () => {
    // Render the ThemeSwitcher component with mock ThemeContext value
    const { getByTestId } = render(
        <ThemeContext.Provider value={mockThemeContextValue}>
            <ThemeSwitcher />
        </ThemeContext.Provider>
    );

    // Simulate a click on the button
    const buttonElement = getByTestId('theme-switcher-button');
    fireEvent.click(buttonElement);

    // Assert that the toggleTheme function is called
    expect(mockThemeContextValue.toggleTheme).toHaveBeenCalled();
});
