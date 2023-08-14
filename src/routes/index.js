import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './layouts-routes';
import PrivateRoutes from './PrivateRoutes';
import LoginPage from '../pages/LoginPage';

const MainRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    {routes.map(({ path, Component }, i) => (
                        <Route path={path} element={Component} key={i} />
                    ))}
                </Route>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Fragment>
    );
};

export default MainRoutes;
