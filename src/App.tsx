import React, {useContext} from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import {WeatherProvider} from "./contexts/WeatherContext";
import {LanguageProvider} from "./contexts/LanguageContext";
import { IntlProvider } from "react-intl";
import {LanguageContext} from "./contexts/LanguageContext";
import {ThemeContext, ThemeProvider} from "./contexts/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";


const App = () => {
    const {locale} = useContext(LanguageContext);
    const{theme} = useContext(ThemeContext);
  return (
      <IntlProvider messages={{}} locale="en" defaultLocale="en">
          <ThemeProvider>
              <div className={`min-h-screen justify-center items-center relative text-white ${theme === 'light' ? 'bg-black-2' : 'bg-gradient-to-br from-blue-500 to-indigo-500'}`}>
                  <LanguageProvider>
                      <WeatherProvider>
                          <ThemeSwitcher />
                          <Dashboard/>
                      </WeatherProvider>
                  </LanguageProvider>
              </div>
          </ThemeProvider>
      </IntlProvider>
  )
}

export default App;
