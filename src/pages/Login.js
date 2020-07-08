import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { TextField, Button, makeStyles } from '@material-ui/core'

import API from './../context/api';

const useStyles = makeStyles(() => ({

}));

function Login() {
    const classes = useStyles();

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [key, setKey] = useState("");

    const login = async () => {
        let loggedIn = await API.login(username, key);
        setLoggedIn(loggedIn);
    }

    const usernameChanged = (event) => {
        setUsername(event.target.value);
    }

    const keyChanged = (event) => {
        setKey(event.target.value);
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <form>
                <TextField
                    label="Username"
                    type="text"
                    value={username}
                    onChange={usernameChanged}
                    variant="outlined"
                />
                <TextField
                    label="key"
                    type="password"
                    value={key}
                    variant="outlined"
                    onChange={keyChanged}
                />
                <Button onClick={login}>Login</Button>
            </form>
            <a href="https://opendata.concordia.ca/admin/register.php"
                rel="noopener noreferrer"
                target="_blank">Don't have an account?</a>
        </div>
        // <Card>
        //     <Logo src={logoImg} />
        //     <Form>
        //         <Input
        //             type="username"
        //             value={username}
        //             onChange={e => {
        //                 setUsername(e.target.value);
        //             }}
        //             placeholder="email"
        //         />
        //         <Input
        //             type="password"
        //             value={key}
        //             onChange={e => {
        //                 setKey(e.target.value);
        //             }}
        //             placeholder="password"
        //         />
        //         <Button onClick={login}>Sign In</Button>
        //     </Form>
        //     <a href="https://opendata.concordia.ca/admin/register.php"
        //         rel="noopener noreferrer"
        //         target="_blank">Don't have an account?</a>
        //     {isError && <Error>The username or password provided were incorrect!</Error>}
        // </Card>
    );
}

export default Login;