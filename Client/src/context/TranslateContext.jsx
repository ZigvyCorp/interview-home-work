import { createContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LanguageContext = createContext({
    tHeader: () => {},
    tMessage: () => {}
})

export function LanguageProvider({ children }){
    const { t: tMessage } = useTranslation('message');
    const { t: tHeader } = useTranslation('header');
    const contextValue = {
        tMessage,
        tHeader
    }
    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

LanguageProvider.propTypes = {
    children: PropTypes.any,
};

export default LanguageContext


