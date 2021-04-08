import React, { Component } from 'react';
import { fetchBoss } from '../actions'
import { connect } from 'react-redux'

class Boss extends Component {
  
  
  render() {
    
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  console.log(state.bosses)
  return {
    boss: state.bosses.find(boss => boss.id == id)
  }
  
}



export default connect(mapStateToProps, { fetchBoss })(Boss)

