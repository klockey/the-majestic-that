import React, { Component } from 'react'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
// import Header from './Header'
import Menu from './Menu'
import Locations from './Locations'

class App extends Component {
  render () {
    return <div>
      <Router>
        <div>
          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/menu' component={Menu} />
            <Route path='/locations' component={Locations} />
          </Switch>
          <Nav />
        </div>
      </Router>
    </div>
  }
}

export default App
