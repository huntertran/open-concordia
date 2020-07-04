import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from './../logo.svg'
import { Card, Logo, Form, Input, Button, Error } from './../components/AuthForm'
import { useAuth } from "../context/auth";

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        axios.get("https://opendata.concordia.ca/API/v1/course/catalog/filter/BIOL/200/UGRD", {
            auth: {
                username: username,
                password: password
            }
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens({
                    username: username,
                    password: password
                });
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
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
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <a href="https://opendata.concordia.ca/admin/register.php"
                rel="noopener noreferrer"
                target="_blank">Don't have an account?</a>
            {isError && <Error>The username or password provided were incorrect!</Error>}
        </Card>
    );
}

export default Login;