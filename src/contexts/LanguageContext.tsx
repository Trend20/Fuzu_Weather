import {createContext, FC, useState} from 'react';

interface LangProps{
    children?: React.ReactNode;
}

export const LanguageContext = createContext<any>({})

export const LanguageProvider: FC<LangProps> = ({children}) => {
    const [locale, setLocale] = useState<string>('en');

    const toggleLocale = () => {
        setLocale(prevLocale => (prevLocale === 'en' ? 'sw' : 'en'));
    };
    return(
        <LanguageContext.Provider value={{ locale, setLocale }}>
            {children}
        </LanguageContext.Provider>
    )
}

