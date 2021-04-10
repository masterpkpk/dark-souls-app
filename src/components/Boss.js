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
    
    const { name, weakness, resistance, immunity, parryable, optional, id, comments} = this.props.boss
    const commentList = comments.length ? (
      comments.map(comment => {
        return (
          <div className="post card" key={comment.id}>
            <div className="card-content">
              <span className="card-title">{comment.content}</span>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No comments</div>
    )
    return (
      <div className="container center" >
          
          <h4> { name } </h4>
          <p> Weakness: { weakness } </p>
          <p> Resistance: { resistance } </p>
          <p> Immunity: { immunity } </p>
          <p> Parryable: { parryable } </p>
          <p> Optional: { optional } </p>
          <Form history={ this.props.history } boss_id={id}/>
          <h5> Comments </h5>
          { commentList }

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id)
  
  return {
    loading: state.loading,
    boss: state.bosses.find(boss => boss.id === id)
  }
  
}



export default connect(mapStateToProps, { fetchBoss })(Boss)

