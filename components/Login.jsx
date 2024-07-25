import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AuthContext from '../hooks/AuthContext';
import { Screen } from './Screen';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [token, setToken] = useState('');

    const handleLogin = () => {
        // Simula la autenticación
        loginUser(token);
    };

    return (
        <Screen>
            <Text>Login</Text>
            <TextInput
                placeholder="Enter token"
                value={token}
                onChangeText={setToken}
            />
            <Button title="Login" onPress={handleLogin} />
        </Screen>
    );
};

export default Login;
