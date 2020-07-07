import {
    makeStyles,
    TextField,
    Button,
    Typography
} from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import Api from "../../context/api";

import GetAppIcon from '@material-ui/icons/GetApp';

import { Chart } from 'react-charts'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'minmax(min-content, max-content) auto'
    },
    form: {
        gridColumn: '1',
        gridRow: '1'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    sensorsData: {
        gridColumn: '1',
        gridRow: '2',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    sensor: {
        flexGrow: 1,
        height: 300,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    sensorDetail: {
        flexGrow: 1,
        maxWidth: 250
    },
    sensorChart: {
        flexGrow: 3
    }
}));

function populateData(sensorName, rawData) {
    let populatedData = [];

    for (let index = 0; index < rawData.length; index++) {
        const timedData = rawData[index];
        populatedData.push([index, timedData[sensorName]]);
    }

    return {
        label: "W/m2",
        data: populatedData
    };
}

export default function Sensors() {
    const classes = useStyles();
    const [points, setPoints] = useState();
    const [sensorReadings, setSensorReadings] = useState([]);
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());
    const [data, setData] = useState([]);

    const fromChanged = (event) => {
        setFrom(event.target.value);
    };

    const toChanged = (event) => {
        setTo(event.target.value);
    };

    const getButtonClicked = () => {
        Api.facilities_environmental(from, to).then((value) => {
            setSensorReadings(value);
            setData([populateData("Point_1", value)]);
        });
    };

    useEffect(() => {
        Api.facilities_pointlist().then(setPoints);
    }, []);

    // const data = React.useMemo(
    //     () => [
    //         {
    //             label: 'Series 1',
    //             data: [
    //                 [0, 1],
    //                 [1, 2],
    //                 [2, 4],
    //                 [3, 2],
    //                 [4, 7],
    //             ],
    //         }
    //     ],
    //     []
    // );

    const series = React.useMemo(
        () => ({
            showPoints: false
        }),
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    );

    return (
        <div className={classes.root}>
            <form className={classes.form} noValidate>
                <TextField
                    id="date"
                    label="From"
                    type="date"
                    defaultValue={from}
                    onChange={fromChanged}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="To"
                    type="date"
                    defaultValue={to}
                    onChange={toChanged}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={getButtonClicked}
                    endIcon={<GetAppIcon />}
                >
                    Get Data
                </Button>
            </form>
            <div className={classes.sensorsData}>
                <div className={classes.sensor}>
                    <div className={classes.sensorDetail}>
                        <Typography>Name: MHL1-017.IC</Typography>
                        <Typography>Description: Outdoor Temperature Sensor of EV weather station</Typography>
                        <Typography>Building: EV</Typography>
                        <Typography>Floor: 17M</Typography>
                        <Typography>Meaning: Solar Irradiance</Typography>
                        <Typography>Units: W/m2</Typography>
                        <Typography>Sensor: Pyrometer</Typography>
                    </div>
                    <div className={classes.sensorChart}>
                        <Chart data={data} axes={axes} series={series} tooltip />
                    </div>
                </div>
            </div>
        </div>
    );
}