import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Switch, Link } from "react-router-dom";

import Collapse from '@material-ui/core/Collapse';

import ApartmentIcon from '@material-ui/icons/Apartment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import MemoryIcon from '@material-ui/icons/Memory';

import Instruction from '../pages/Instruction';
import BuildingList from '../pages/facilities/BuildingList';
import Sensors from '../pages/facilities/Sensors';

import PrivateRoute from './../PrivateRoute';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        width: 'calc(100vw - 240px)',
        padding: theme.spacing(1),
        marginTop: theme.spacing(8),
        height: 'calc(100vh - 68px)'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const routes = [
    {
        path: "/dashboard",
        exact: true,
        component: Instruction
    },
    {
        path: "/dashboard/facilities/buildinglist",
        component: BuildingList
    },
    {
        path: "/dashboard/facilities/sensors",
        component: Sensors
    }
]

export default function Dashboard() {
    const classes = useStyles();

    const [facilitiesOpen, setFacilitiesOpen] = React.useState(true);

    const handleFacilitiesClick = () => {
        setFacilitiesOpen(!facilitiesOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Concordia Open Data
                        </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button onClick={handleFacilitiesClick}>
                            <ListItemIcon>
                                <ApartmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facilities" />
                            {facilitiesOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={facilitiesOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested} component={Link} to="/dashboard/facilities/buildinglist">
                                    <ListItemIcon>
                                        <LocalConvenienceStoreIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Building List" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/dashboard/facilities/sensors">
                                    <ListItemIcon>
                                        <MemoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sensors" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <Divider />
                    <List>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Switch>
                    {routes.map((route, index) => (
                        <PrivateRoute
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </main>
        </div>
    );
}