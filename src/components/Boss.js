import React, { Component } from 'react';
import { fetchBoss } from '../actions'
import { connect } from 'react-redux'



class Boss extends Component {
  
  
  
  render() {
    
    if (this.props.loading) {
      return (
        <div className="container center">
          <h2>loading</h2>
        </div>
      )
    }
    console.log(this.props)
    const { name, weakness, resistance, immunity, parryable, optional} = this.props.boss
    
    return (
      <div className="container center" >
          
          <h4> { name } </h4>
          <p> Weakness: { weakness } </p>
          <p> Resistance: { resistance } </p>
          <p> Immunity: { immunity } </p>
          <p> Parryable: { parryable } </p>
          <p> Optional: { optional } </p>
          <h4> Leave a Comment </h4>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id)
  console.log(state.bosses)
  return {
    loading: state.loading,
    boss: state.bosses.find(boss => boss.id === id)
  }
  
}



export default connect(mapStateToProps, { fetchBoss })(Boss)

