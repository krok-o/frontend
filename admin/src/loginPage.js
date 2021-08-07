import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const LoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [apiKeySecret, setApiKeySecret] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, apiKey, apiKeySecret }).catch(() =>
            notify('Invalid login information')
        );
    };

    return (
        <ThemeProvider theme={createMuiTheme(defaultTheme)}>
            <form onSubmit={submit}>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    name="apiKey"
                    type="text"
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                />
                <input
                    name="apiKeySecret"
                    type="password"
                    value={apiKeySecret}
                    onChange={e => setApiKeySecret(e.target.value)}
                />
            </form>
            <Notification />
        </ThemeProvider>
    );
};

export default LoginPage;