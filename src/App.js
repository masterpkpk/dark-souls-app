import React, { Component } from 'react'

import NavBar from './components/NavBar'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Boss from "./components/Boss"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchBosses } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchBosses();
  }

  render () {
    return (
      <Router>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route path="/:id" component={Boss} />
              
            </Switch>
      </Router>
    );
  }
}




export default connect(null, { fetchBosses })(App)
