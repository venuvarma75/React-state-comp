import React, { Component } from 'react'
import Signup from "./Signup"
import Login from "./Login"
export default class  extends Component {
     constructor(){
        super()
        this.state={
            isSignup:false,
            isLogin:false
        }
    }
    myClickSignup=()=>{
        this.setState({isSignup:!this.state.isSignup})
    }
    myClickisLogin=()=>{
        this.setState({isLogin:!this.state.isLogin})
    }
  render() {
    return (
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
           <h1> V TechSolutions</h1>
        </div>

        <div style={{display:"flex",justifyContent:"spacebetween",alignItems:"center",gap:"20px"}}>
            <button onClick={this.myClickSignup}>Signup</button>
            <button onClick={this.myClickisLogin}>Login</button>
        </div>
        
       {this.state.isSignup && <Signup/>}
       {this.state.isLogin && <Login/>}
      </div>
    )
  }
}
