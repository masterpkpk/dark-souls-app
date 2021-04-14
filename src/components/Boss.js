import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form'
import { Link } from 'react-router-dom'
import { fetchComments } from "../actions"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Comment from './Comment'




class Boss extends Component {
  
  render() {
    if (this.props.loading) {
      return (
        <div className="container center">
          <h2>loading</h2>
        </div>
      )
    }
    
   

    const { name, weakness, resistance, immunity, parryable, optional, id, pic} = this.props.boss
    const bossComments = this.props.comments.filter(comment => id === comment.boss_id)
    
         
    return (
      <div className="container center" >
        <Grid container direction="row" justify="space-between" alignItems="flex-end">
          <div>
              {
                (id === 1)
                ? <div>
                  
                  </div>
                : <div>
                    <Link to={'/' + (id - 1)}>
                    <Button variant="contained" color="primary">Previous</Button>
                    </Link>
                  </div>
              }
            </div>
            <div>
                <img src={pic}  alt={name}  width="300" height="300"/>
            </div>
          
          <div className="boss">
            <h4> { name } </h4>
            <p> Weakness: { weakness } </p>
            <p> Resistance: { resistance } </p>
            <p> Immunity: { immunity } </p>
            <p> Parryable: { parryable } </p>
            <p> Optional: { optional } </p>
          </div>
          <div>
            {
                (id === 19)
                ? <div>
                  
                  </div>
                : <div>
                    <Link to={'/' + (id + 1)}>
                    <Button variant="contained" color="primary">Next</Button>
                      
                    </Link>
                  </div>
              }
          </div>  


        </Grid>
          <Form history={ this.props.history } boss_id={id}/>
          <h4 className="center"> Comments </h4>
        <div className="container">
          {
            (bossComments.length > 0)
              ?
                <Comment comments={bossComments} />
              : 
                <div>
                  No comments
                </div>
          }
        </div>
      </div> 
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id)
  
  return {
    loading: state.loading,
    boss: state.bosses.find(boss => boss.id === id),
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(Boss)

