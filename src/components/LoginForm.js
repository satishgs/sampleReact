import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Paper, Typography } from '@mui/material';
import properties from '../constants/properties.json';
import { loginSuccess, loginFailure } from '../actions/authActions';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (username === properties.username && password === properties.password) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFailure());
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '2em', border: '2px solid #3f51b5' }}>
            <img src="/logo.png" alt="App Logo" style={{ width: '100px', marginBottom: '1em' }} />
            <Typography variant="h5">Login</Typography>
            <TextField label="Username" onChange={(e) => setUsername(e.target.value)} />
            <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Login
            </Button>
        </Paper>
    );
};

export default LoginForm;
