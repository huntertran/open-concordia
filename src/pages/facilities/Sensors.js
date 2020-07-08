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

function populateData(sensorName, rawData, unitLabel) {
    let populatedData = [];

    for (let index = 0; index < rawData.length; index++) {
        const timedData = rawData[index];
        populatedData.push([new Date(rawData[index].Date), timedData[sensorName]]);
    }

    return {
        label: unitLabel,
        data: populatedData
    };
}

export default function Sensors() {
    const classes = useStyles();
    const [points, setPoints] = useState();
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
            let sensorData = []
            for (let index = 0; index < points.length; index++) {
                sensorData.push([populateData(points[index].Point_Identifier, value, points[index].Units)]);
            }

            setData(sensorData);
        });
    };

    useEffect(() => {
        Api.facilities_pointlist().then(setPoints);
    }, []);

    const series = React.useMemo(
        () => ({
            showPoints: true
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
                {points && points.map((sensor, index) => (
                    <div key={sensor.Point_Identifier} className={classes.sensor}>
                        <div className={classes.sensorDetail}>
                            <Typography>Name: {sensor.System_Name}</Typography>
                            <Typography>Description: {sensor.Description}</Typography>
                            <Typography>Building: {sensor.Building}</Typography>
                            <Typography>Floor: {sensor.Floor}</Typography>
                            <Typography>Meaning: {sensor.Type_of_Measurement}</Typography>
                            <Typography>Units:{sensor.Units}</Typography>
                            <Typography>Sensor: {sensor.Sensor_Type}</Typography>
                        </div>
                        <div className={classes.sensorChart}>
                            {data[index] &&
                                <Chart data={data[index]} axes={axes} series={series} tooltip />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}