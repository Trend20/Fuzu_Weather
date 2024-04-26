import {ChangeEvent, FC} from "react";
import { TfiWorld } from "react-icons/tfi";

interface SwitchLangProps {
    handleSelectChange: any
}
const SwitchLang:FC<SwitchLangProps> = ({handleSelectChange}) => {
    return(
        <div className='flex items-center space-x-2'>
            <TfiWorld size={20}/>
            <select className='bg-transparent outline-0' onChange={(e:ChangeEvent<HTMLSelectElement>) => handleSelectChange(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
        </div>
    )
}

export default SwitchLang;