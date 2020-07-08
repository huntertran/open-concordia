import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  div: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 18,
    height: 18,
    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '100%',
    userSelect: 'none',
    transform: 'translate(-50%, -50%)',
  }
}));

export default function Marker() {
  const classes = useStyles();

  return (
    <div className={classes.div} />
  )
};