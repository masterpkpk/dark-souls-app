import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Boss from "./components/Boss"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route path="/:id" component={Boss} />
              
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App
