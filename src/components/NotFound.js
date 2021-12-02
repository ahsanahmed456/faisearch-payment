import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import img from "../img/404.jpg";

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    Box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginTop: theme.spacing(6),
    },
    link: {
      textDecoration: 'none',
    },
  }));

export default function NotFound() {
    const classes = useStyles();

    return(
      <div className={classes.Box}>
        <img src={img} alt="404 page not found" />

        <Link
         to="/"
         className={classes.link}
         >
        <Button
         variant="outlined"
         color="primary"
         size="large"
         className={classes.button}
         endIcon={<ArrowForwardOutlinedIcon />}
       >
        Go Back 
      </Button>
    </Link>
    </div>
  )};
