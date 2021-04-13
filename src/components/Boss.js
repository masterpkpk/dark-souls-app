import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form'
import { Link } from 'react-router-dom'
import { fetchComments } from "../actions"


class Boss extends Component {
  
 
  render() {
    
    if (this.props.loading) {
      return (
        <div className="container center">
          <h2>loading</h2>
        </div>
      )
    }
    
    const { name, weakness, resistance, immunity, parryable, optional, id,  pic} = this.props.boss
    
    const bossComments = this.props.comments.filter(comment => id === comment.boss_id)
    const commentList = bossComments.map(comment => {
      return (
        <div className="comment" key={comment.id}>
          { comment.content }
        </div>
      )
    })
      
    

    
    return (
      <div className="container center" >
        <div className="float-container">
          <div className="float-child">
            {
              (id === 1)
              ? <div>
                 
                </div>
              : <div>
                  <Link to={'/' + (id - 1)}>
                    <button>Previous</button>
                  </Link>
                </div>
            }
          </div>
          <div className="float-child" >
            {
                (id === 19)
                ? <div>
                  <button>None</button>
                  </div>
                : <div>
                    <Link to={'/' + (id + 1)}>
                      <button>Next</button>
                    </Link>
                  </div>
              }
          </div>
        </div>

        <div className="float-container">
          <div className="float-child">
            <div className="boss">
                <img src={pic}  alt={name}  width="300" height="300"/>
            </div>
          </div>
          <div className="float-child boss" >
            <h4> { name } </h4>
            <p> Weakness: { weakness } </p>
            <p> Resistance: { resistance } </p>
            <p> Immunity: { immunity } </p>
            <p> Parryable: { parryable } </p>
            <p> Optional: { optional } </p>
          </div>
        </div>
         
          <Form history={ this.props.history } boss_id={id}/>
          <h4 className="center"> Comments </h4>
         
        {
          (commentList.length > 0) ?
            commentList : 
            <div>
              No comments
            </div>
        }
       

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

