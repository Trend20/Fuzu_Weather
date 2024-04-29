import {useContext} from "react";
import { MdSunny, MdDarkMode } from "react-icons/md";
import {ThemeContext} from "../../contexts/ThemeContext";


const ThemeSwitcher = () => {
    const{theme, toggleTheme} = useContext(ThemeContext);
    return (
        <button
            className={`absolute top-5 right-5 ${theme === 'dark' ? 'text-whiten' : 'text-black-2'}`}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <MdSunny size={30}/> : <MdDarkMode size={30}/>}
        </button>
    )
}

export default ThemeSwitcher;