import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import { TextField, Button, makeStyles } from '@material-ui/core'

import API from './../context/api';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    formItem: {
        display: 'block',
        margin: theme.spacing(2)
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'block'
    }
}));

function Login() {
    const classes = useStyles();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [key, setKey] = useState(localStorage.getItem("key"));

    const { routeUsername, routeKey } = useParams();

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

    useEffect(() => {
        let credentialExisted = API.isCredentialExisted();
        if (credentialExisted) {
            API.login(username, key)
                .then((isOk) => {
                    setLoggedIn(isOk);
                });
        };

        if (routeUsername !== "" && routeKey !== "") {
            API.login(routeUsername, routeKey)
                .then((isOk) => {
                    setLoggedIn(isOk);
                });
        }
    });

    if (isLoggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className={classes.root}>
            <form>
                <TextField
                    className={classes.formItem}
                    label="Username"
                    type="text"
                    value={username}
                    onChange={usernameChanged}
                    variant="outlined"
                />
                <TextField
                    label="key"
                    className={classes.formItem}
                    type="password"
                    value={key}
                    variant="outlined"
                    onChange={keyChanged}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.center}
                    onClick={login}>Login</Button>
            </form>
            <a className={classes.center}
                href="https://opendata.concordia.ca/admin/register.php"
                rel="noopener noreferrer"
                target="_blank">Don't have an account?</a>
        </div>
    );
}

export default Login;