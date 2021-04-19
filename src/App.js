import React, { Component } from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import Home from "./components/Home"
import Weapons from "./components/Weapons"
import Armor from "./components/Armor"
import Boss from "./components/Boss"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchBosses, fetchComments } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
  
    this.props.fetchBosses()
   
    this.props.fetchComments()
    
    
  }

  render () {
   
    return (
      <Router>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/weapons' component={Weapons} />
              <Route exact path='/armor' component={Armor} />
              <Route path="/:id" component={Boss} />
            </Switch>
      </Router>
    );
  }
}




export default connect(null, { fetchBosses, fetchComments })(App)
