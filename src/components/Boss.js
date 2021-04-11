import React, { Component } from 'react';
import { fetchBoss } from '../actions'
import { connect } from 'react-redux'
import Form from './Form'



class Boss extends Component {
  
 
  
  render() {
    
    if (this.props.loading) {
      return (
        <div className="container center">
          <h2>loading</h2>
        </div>
      )
    }
    
    const { name, weakness, resistance, immunity, parryable, optional, id, comments, pic} = this.props.boss
    
  

    const commentList = comments.length ? (
      comments.map(comment => {
        return (
          <div className="comment container" key={comment.id}>
            <div className="post card transparent" >
                <span className="card-title transparent">{comment.content}</span>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No comments</div>
    )
    return (
      <div className="container center" >
        <div className="boss float-container">
          <br />
          <div className="float-child">
            <img src={pic}  alt={name}  width="300" height="300"/>
          </div>
            <div className="float-child">
            <h4> { name } </h4>
            <p> Weakness: { weakness } </p>
            <p> Resistance: { resistance } </p>
            <p> Immunity: { immunity } </p>
            <p> Parryable: { parryable } </p>
            <p> Optional: { optional } </p>
          </div>
            <Form history={ this.props.history } boss_id={id}/>
            <h4 className="center"> Comments </h4>
          { commentList }
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



export default connect(mapStateToProps, { fetchBoss })(Boss)

