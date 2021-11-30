import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: '1px solid ${theme.palette.divider}',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 4, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: '1px solid ${theme.palette.divider}',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Select',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Select',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Select',
    buttonVariant: 'outlined',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
         <Container  component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2"  color="textPrimary" gutterBottom>
          Faisearch
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
         we offer services which can boost your E-commerce business, We offer these service at the lowest prices as 
         compared to market and our services are much better then other service providers. <br/>
         Try our free trail rigth now. <a href="#">click here</a>
        </Typography>
    
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
<Typography component="h1" variant="h4"  color="textPrimary" gutterBottom>
  Main Features we offer:
  </Typography>     
     <Typography variant="h5" color="textPrimary" component="p">
       <ul>
<li>- Ai search</li>
<li>- Voice search</li>
<li>- Visual search</li>
<li>- etc..</li>
<li><a href="#">learn more</a></li>
       </ul>
     </Typography>
      </Container>
    </React.Fragment>
  );
}