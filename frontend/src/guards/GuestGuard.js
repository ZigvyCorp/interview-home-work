
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestGuard = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.auth);

    if (isAuthenticated) {
        return <Navigate to={"/"} />;
    }

    return (
        <>{children}</>
    );
};

export default GuestGuard;