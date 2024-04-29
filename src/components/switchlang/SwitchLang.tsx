import {FC, useContext} from "react";
import { TfiWorld } from "react-icons/tfi";
import {LanguageContext} from "../../contexts/LanguageContext";

const SwitchLang:FC = () => {
    const {locale, setLocale} = useContext(LanguageContext)

    const handleChangeLanguage = (e: { target: { value: any; }; }) => {
        setLocale(e.target.value);
    };
    return(
        <div className='flex items-center space-x-2'>
            <TfiWorld size={20}/>
            <select value={locale} onChange={handleChangeLanguage} className="bg-transparent">
                <option value="en">EN</option>
                <option value="sw">SW</option>
            </select>
            {/*<button onClick={toggleLocale}>Switch {locale}</button>*/}
        </div>
    )
}

export default SwitchLang;