import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';

import CustomCard from './CustomCard';


const useStyles = makeStyles({
  divStyle: {
    width: '50%',
    border: '2px solid red',
    padding: '15px'
  },
  btnColor: {
    background: 'yellow',
  }
});

function Home() {
  const[btnColor, setBtnColor] = useState("error")
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid item xs={6}>
          <CustomCard />
        </Grid>
        <Grid item xs={6}>
          <CustomCard />
        </Grid>
        <Grid item xs={6}>
          <CustomCard />
        </Grid>
        <Grid item xs={6}>
          <CustomCard />
        </Grid>
      </Grid>
    </>
  );
}

export default Home
