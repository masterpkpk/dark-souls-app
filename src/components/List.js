import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List extends Component {
  
  render() {
   
    const { bosses } = this.props
    const bossesList = bosses.length ? (
      bosses.map(boss => {
        return (
          <div className="bosses" key={boss.id}>
            <div className="post card transparent" >
              <div className="card-content transparent">
                <Link to={'/' + boss.id}>
                  <span className="card-title transparent">{boss.name}</span> 
                </Link>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">None yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">Bosses</h4>
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

export default connect(mapStateToProps)(List)