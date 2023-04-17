import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }));
    };

    return (
        <Fragment>
            <h1>Login Page</h1>
        </Fragment>
    );
};

export default LoginPage;
