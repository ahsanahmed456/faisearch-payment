import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 4, 6),
  },
}));


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