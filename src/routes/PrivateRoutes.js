import { Fragment } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    // console.log('Private Route : ', children);
    let auth = { token: 'ieuhersey3lmbax;ogroths;odf3p9rfklsfwpeioj' };
    return <Fragment>{auth.token ? <Outlet /> : <Navigate to="/" />}</Fragment>;
};

export default PrivateRoutes;
