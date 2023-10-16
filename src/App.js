import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';

const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {isAuthenticated ? <h1>Welcome, you are authenticated</h1> : <LoginForm />}
        </div>
    );
};

export default App;
