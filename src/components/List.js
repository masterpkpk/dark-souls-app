import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBosses } from '../actions'
import { Link } from 'react-router-dom'


class List extends Component {

  componentDidMount() {
    this.props.fetchBosses();
  }
  
  render() {
    console.log(this.props)
    const { bosses } = this.props
    
    const bossesList = bosses.length ? (
      bosses.map(boss => {
        return (
          <div className="post card" key={boss.id}>
            <div className="card-content">
              <Link to={'/' + boss.id}>
                <span className="card-title">{boss.name}</span> 
              </Link>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">None yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {bossesList}
      </div>
    )
  
    
  }
}

const mapStateToProps = state => {
  return {
    bosses: state.bosses
  }
}

export default connect(mapStateToProps, { fetchBosses })(List)