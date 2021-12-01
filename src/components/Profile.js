import React from 'react'
import {
    Container,
    Box,
    Avatar,
    Card,
    Paper,
    Typography,
    Grid,
    ListItemAvatar,
    List,
    ListItem,
    ListItemText,

} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import img from "../img/profile.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
      },
    Avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
    },
    List: {
      marginTop: theme.spacing(3),
      width: '100%',
      maxWidth: 360,
    },
  }));

export default function Profile() {
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xs">
              <Paper>
              <div className={classes.paper}>
                <Avatar alt="Remy Sharp" src={img} className={classes.Avatar} />
                <Typography variant="body1" color="secondary">Ronald Chen</Typography>
                <Typography variant="caption" color="textSecondary">RonaldChen@gmail.com</Typography>
                </div>
                 
           <List className={classes.List}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary="Ronald Chen" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="RonaldChen@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary="10 street" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Contact" secondary="123445678" />
      </ListItem>
    </List>

</Paper>              
            </Container>
        </div>
    )
}
