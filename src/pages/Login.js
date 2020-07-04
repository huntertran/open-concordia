import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import logoImg from './../logo.svg'
import { Card, Logo, Form, Input, Button, Error } from './../components/AuthForm'

import API from './../context/api';

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async() => {
        let loggedIn = await API.login(username, password);
        setLoggedIn(loggedIn);
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                    type="username"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <Button onClick={login}>Sign In</Button>
            </Form>
            <a href="https://opendata.concordia.ca/admin/register.php"
                rel="noopener noreferrer"
                target="_blank">Don't have an account?</a>
            {isError && <Error>The username or password provided were incorrect!</Error>}
        </Card>
    );
}

export default Login;