import {FC, useContext} from "react";
import { TfiWorld } from "react-icons/tfi";
import {LanguageContext} from "../contexts/LanguageContext";

const SwitchLang:FC = () => {
    const {locale, toggleLocale} = useContext(LanguageContext)
    return(
        <div className='flex items-center space-x-2'>
            <TfiWorld size={20}/>
            <button onClick={toggleLocale}>Switch {locale}</button>
        </div>
    )
}

export default SwitchLang;