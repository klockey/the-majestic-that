import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return <div className='Contact'>
      <form onSubmit=''>
        <div className=''>
          <input type='text' className='input' placeholder='Name' />
        </div>
        <div className=''>
          <input type='text' className='input' placeholder='Phone Number' />
        </div>
        <div className=''>
          <input type='text' className='input' placeholder='Email Address' />
        </div>
        <div className=''>
          <button type='submit' value='Submit' className='input'>Submit</button>
        </div>
      </form>
    </div>
  }
}

export default Contact
