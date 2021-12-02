import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Link, } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
      textDecoration:"none"
    },
  }));

 
export default function DefaultAppbar() {
  const classes = useStyles();

    return (
        <div>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            faisearch
          </Typography>
          <nav>
           <Link to="/" variant="button" color="textPrimary" className={classes.link}>
              Home
            </Link>
            <Link to="/pricing" variant="button" color="textPrimary" className={classes.link}>
              Pricing
            </Link>
            <Link to="/profile" variant="button" color="textPrimary" className={classes.link}>
              Profile
            </Link>
          </nav>
            <Link className={classes.link} to="/login">
          <Button to="login" color="primary" variant="outlined">
            Login
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
        </div>
    )
}
