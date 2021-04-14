import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

class List extends Component {
  
  render() {
   
    const { bosses } = this.props
    const bossesList = bosses.length ? (
      bosses.map(boss => {
        return (
          <div key={boss.id}>
            <Grid item xs={12}>           
              <Link to={'/' + boss.id}>
                <div className="center">
                  {boss.name}
                </div>
                <div className="center">
                  <img src={boss.pic} alt={boss.name} width="150" height="150"/>
                </div>
              </Link>
            </Grid>             
          </div>
        )
      })
    ) : (
      <div className="center">None yet</div>
    )
    return (
      <div>
        <h4 className="center">Bosses</h4>
          <Grid container direction="row" justify="space-between" alignItems="flex-start">  
            {bossesList}
          </Grid>
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