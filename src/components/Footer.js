import React from "react"
import {AppBar, Container, Toolbar, Typography }from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {

  const useStyles = makeStyles(theme => ({
    
    bottomPush: {
      position: "fixed",
      bottom: 0,
      textAlign: "center",
      paddingBottom: 10,
      
  }
  }));
  const classes = useStyles()
  return(
   
   <div className={classes.bottomPush}>
    <AppBar position="static" color="primary">
      <Container  maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © Dark Souls Phony's INC.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  </div>
  
  )
}

export default Footer