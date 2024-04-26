import {ChangeEvent, FC} from "react";

interface SwitchLangProps {
    handleSelectChange: any
}
const SwitchLang:FC<SwitchLangProps> = ({handleSelectChange}) => {
    return(
        <div>
            <select onChange={(e:ChangeEvent<HTMLSelectElement>) => handleSelectChange(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
        </div>
    )
}

export default SwitchLang;