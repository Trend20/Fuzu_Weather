import {createContext, FC, ReactNode, useState} from 'react';
export const ThemeContext = createContext<any>({})

interface Theme {
    children: ReactNode;
}
export const ThemeProvider:FC<Theme> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
