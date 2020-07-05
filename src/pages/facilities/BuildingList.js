import React, { useEffect, useState } from 'react';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Tabs,
    Tab,
    Typography
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';

import API from './../../context/api';
import GoogleMapReact from 'google-map-react';

import Marker from './../../components/Marker';

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
    },
    fullHeight: {
        paddingBottom: theme.spacing(8),
        height: '100vh'
    },
    fullContainer: {
        height: '100%'
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

function getBuilding(buildingList, index) {
    return buildingList[index];
}

export default function BuildingList() {
    const classes = useStyles();
    const theme = useTheme();
    const [tabPanelIndex, setTabPanelIndex] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [buildingList, setBuildingList] = useState([]);
    const [loyolaBuildingList, setLoyolaBuildingList] = useState([]);
    const [selectedBuildingIndex, setSelectedBuildingIndex] = useState(0);

    // maps
    const [center, setCenter] = useState([45.495376, -73.577997]);
    const [zoom, setZoom] = useState(15);
    const [selectedBuilding, setSelectedBuilding] = useState();

    const handleBuildingClick = (event, index) => {
        setSelectedBuildingIndex(index);
        if (tabPanelIndex === 0) {
            // webster
            let building = getBuilding(buildingList, selectedBuildingIndex);
            setSelectedBuilding(building);
            setCenter([Number(building.Latitude), Number(building.Longitude)]);
        }
    }

    const handleChange = (event, newValue) => {
        setTabPanelIndex(newValue);
    };

    const handleChangeIndex = (index) => {
        setTabPanelIndex(index);
    };

    const handleApiLoaded = (map, maps) => {
        
    };

    useEffect(() => {
        API.facilities_buildinglist().then((buildings) => {
            let loyolaBuildings = buildings.filter(function (item) {
                return item.Campus === "LOY";
            });

            let websterBuildings = buildings.filter(function (item) {
                return item.Campus === "SGW";
            });

            setLoyolaBuildingList(loyolaBuildings);
            setBuildingList(websterBuildings);
        });
    }, [])

    return (
        <div>
            <Grid container spacing={1} className={classes.fullHeight}>
                <Grid item xs={8} className={classes.fullContainer}>
                    <GoogleMapReact
                        defaultCenter={[45.495376, -73.577997]}
                        center={center}
                        zoom={zoom}
                        yesIWantToUseGoogleMapApiInternals={true}
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                    >
                        {selectedBuilding &&
                            <Marker
                                text={selectedBuilding.Building_Long_Name}
                                lat={selectedBuilding.Latitude}
                                lng={selectedBuilding.Longitude}
                            />
                        }
                    </GoogleMapReact>
                </Grid>
                <Grid item xs={4} style={{ maxHeight: '100%', overflow: 'auto' }}>
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
                            <List component="nav" height="50%">
                                {buildingList.map((building, index) => (
                                    <ListItem
                                        key={index}
                                        button
                                        selected={selectedBuildingIndex === index}
                                        onClick={(event) => handleBuildingClick(event, index)}
                                    >
                                        <ListItemText primary={building.Building_Name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography component="span"
                                                        variant="body2"
                                                        color="textSecondary">{building.Building_Long_Name}</Typography>
                                                    <br />
                                                    <Typography component="span"
                                                        variant="body2"
                                                        color="textSecondary">{building.Address}</Typography>
                                                </React.Fragment>
                                            } />
                                    </ListItem>
                                ))}
                            </List>
                        </TabPanel>
                        <TabPanel value={tabPanelIndex} index={1} dir={theme.direction}>
                            <List component="nav">
                                {loyolaBuildingList.map((building, index) => (
                                    <ListItem
                                        key={index}
                                        button
                                        selected={selectedBuildingIndex === index}
                                        onClick={(event) => handleBuildingClick(event, index)}
                                    >
                                        <ListItemText primary={building.Building_Long_Name} />
                                    </ListItem>
                                ))}
                            </List>
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}