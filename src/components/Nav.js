import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <div className='Nav container'>
      <span className='item'> <Link to='/' className=''>Home</Link> </span>
      <span className='item'> <Link to='/menu' className=''> Menu </Link> </span>
      <span className='item'> <Link to='/contact' className=''> Contact </Link> </span>
      <span className='item'> <Link to='/locations' className=''> Locations </Link> </span>
    </div>
  }
}

export default Nav
