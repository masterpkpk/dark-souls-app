import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "grey"
  },
  fonts: {
    fontWeight: "bold",
    color: "black"
  },
  inline: {
    display: "inline"
  }
  
}));


const Comment = ({ comments }) => {
  console.log(comments)
  const classes = useStyles()
  return (
    
      <List className={classes.root}>
        {comments.map(comment => {
          return(
            <React.Fragment key={comment.id}>
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemText
                  primary={
                  <Typography className={classes.fonts}>
                    {comment.content}
                  </Typography>
                }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          )
        })}
      </List>
  
  )
}

export default Comment;