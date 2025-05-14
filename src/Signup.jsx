import React, { Component } from 'react'
export default class Signup extends Component {
  render() {
    return (
      <div>
        <form action="">
        <input type="name" placeholder='name' />
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password'/>
             <button>Signup</button>
        </form>
      </div>
    )
  }
}

