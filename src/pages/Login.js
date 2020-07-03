import React from "react";
// import { Link } from 'react-router-dom';
import logoImg from './../logo.svg'
import { Card, Logo, Form, Input, Button } from './../components/AuthForm'

function Login() {
    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="username" placeholder="username" />
                <Input type="key" placeholder="key" />
                <Button>Sign In</Button>
            </Form>
            <a href="https://opendata.concordia.ca/admin/register.php"
                rel="noopener noreferrer"
                target="_blank">Don't have an account?</a>
        </Card>
    );
}

export default Login;