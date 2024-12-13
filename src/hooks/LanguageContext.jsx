import { createContext, useState, useContext } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // 'en' para inglés, 'es' para español

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook para usar el contexto
export const useLanguage = () => {
    return useContext(LanguageContext);
};