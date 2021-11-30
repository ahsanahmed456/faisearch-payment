import React from 'react'
import {
    Container,
    Box,
    Avatar,
    Card,
    Typography,
    Grid,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import img from "../img/profile.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
      },
    Avatar: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      margin: theme.spacing(1),
    },
  }));

export default function Profile() {
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <Avatar alt="Remy Sharp" src={img} className={classes.Avatar} />
                <Typography variant="body1" color="secondary">Ronald Chen</Typography>
                <Typography variant="overline" color="textSecondary">Assistance Manager</Typography>
                <Grid
                  direction="row"
                >
                    <FacebookIcon size="small" />
                    <TwitterIcon  size="small" />
                    <InstagramIcon size="small" />
                </Grid> 
              </div>
            </Container>
        </div>
    )
}
