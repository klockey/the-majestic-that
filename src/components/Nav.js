import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <div className='Nav container'>
      <span className='item'> <Link to='/contact' className=''> Contact </Link> </span>
      <span className='item'> Locations: St. Petersburg </span>
      <span className='item'> Tampa </span>
    </div>
  }
}

export default Nav
