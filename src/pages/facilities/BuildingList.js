import React, { useEffect, useState } from 'react';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Tabs,
    Tab} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import SwipeableViews from 'react-swipeable-views';

import API from './../../context/api';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    tab: {
        padding: theme.spacing(0),
        width: '50%',
        minWidth: '0'
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function BuildingList() {
    const classes = useStyles();
    const theme = useTheme();
    const [tabPanelIndex, setTabPanelIndex] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [buildingList, setBuildingList] = useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleChange = (event, newValue) => {
        setTabPanelIndex(newValue);
    };

    const handleChangeIndex = (index) => {
        setTabPanelIndex(index);
    };

    const fetchData = async() => {
        const data = await API.facilities_buildinglist();
        setBuildingList(data);
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=8</Paper>
                </Grid>
                <Grid item xs={4}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={tabPanelIndex}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab className={classes.tab} label="Webster" {...a11yProps(0)} />
                            <Tab className={classes.tab} label="Loyola" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={tabPanelIndex}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={tabPanelIndex} index={0} dir={theme.direction}>
                            <List component="nav">
                                <ListItem
                                    button
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <ListItemText primary={buildingList} />
                                </ListItem>
                            </List>
                        </TabPanel>
                        <TabPanel value={tabPanelIndex} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}