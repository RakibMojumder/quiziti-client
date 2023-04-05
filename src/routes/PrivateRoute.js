import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_CONTEXT } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AUTH_CONTEXT);
    const location = useLocation();

    if (!user?.email) return <Navigate to='/auth' replace={true} state={{ from: location }} />

    return children;
};

export default PrivateRoute;