import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loaders/Loader';
import { AUTH_CONTEXT } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AUTH_CONTEXT);
    const location = useLocation();

    if (loading) return <Loader loading={loading} />;
    if (user?.email) return children;
    return <Navigate to='/auth' state={{ from: location }} replace />
};

export default PrivateRoute;