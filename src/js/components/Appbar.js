import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare } from 'react-icons/fa';
import { StickyContainer} from 'react-sticky';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();
  const youtubeUrl= 'https://www.youtube.com/user/mohfwindia';
  const twitterUrl= 'https://twitter.com/MoHFW_INDIA';
  const facebookUrl='https://www.facebook.com/pg/MoHFWIndia/posts/?ref=page_internal';

  return (
    <div className={classes.root}>
       <StickyContainer>
      <AppBar position="static"  style={{backgroundColor:'#91C499'}}>

  
        <Toolbar>

          

        <div variant="h6" className={classes.title} style={{color:'white',fontSize:'25px'}}>
          Covid19-Tracker
          </div>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
          <FaFacebookSquare onClick={() => window.open(facebookUrl, "_blank")} style={{fontSize:'1.5em'}}>

          </FaFacebookSquare>
          <FaYoutubeSquare onClick={() => window.open(youtubeUrl, "_blank")} style={{fontSize:'1.5em',marginLeft:'5px'}}>

          </FaYoutubeSquare>
          <FaTwitterSquare onClick={() => window.open(twitterUrl, "_blank")} style={{fontSize:'1.5em', marginLeft:'5px'}} >

          </FaTwitterSquare>
          </IconButton>
         
         
        </Toolbar>
      </AppBar>
      </StickyContainer>
    </div>
  );
}
