import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <div>
        <form action="">
            <input type="email"  placeholder='email'/>
            <input type="password" placeholder='Password' />
            <button>Login</button>

        </form>
      </div>
    )
  }
}
