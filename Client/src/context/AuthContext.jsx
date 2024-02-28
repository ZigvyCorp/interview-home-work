import { createContext, useEffect, useState } from 'react';
import { LocalStore } from '../utils/helpers/local.js';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../routes/routes.jsx';
import PropTypes from 'prop-types';

const AuthContext = createContext({
    logOut: () => {
    }
})

const { isExist, get, remove, set } = LocalStore

function AuthContextProvider({ children }) {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(isExist('access_token'))

    useEffect(() => {
        if (isExist('access_token')) {
            setIsLogin(true)
        }
    }, [get('access_token', true)])

    const login = (token) => {
        set('access_token', token)
        setIsLogin(true)
        navigate(Routes.HOME.path)
    }
    const logOut = () => {
        remove('access_token');
        setIsLogin(false)
        navigate(Routes.LOGIN)
    }

    const valueProps = {
        login,
        logOut,
        isLogin
    }
    return <AuthContext.Provider value={valueProps}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.any
};

export { AuthContext, AuthContextProvider }
