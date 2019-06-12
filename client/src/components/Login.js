import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {login} from './UserFunctions';

class Login extends Component {
  constructor(){
    super()
    this.state = {
        email:'',
        password:''
    }
}
    onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
}
    onSubmit = (e)=>{
    e.preventDefault();

    const user = {
        email: this.state.email,
        password: this.state.password
    }

    login(user).then(res=>{
            if(res){
            this.props.history.push(`/dashboard`);
        }else{
            console.log("User does not exist");
        }
    });
}
  render() {
    return (
        <section className="container">
        {/* <!-- Alert --> */}
        {/* <div className="alert alert-danger">Invalid Credentials</div> */}
       <h1 className="large text-primary">Sign In</h1>
       <p className="lead"><i className="fas fa-user"></i> Sign In Into Your Account</p>
       <form onSubmit={this.onSubmit} className="form">
           <div className="form-group">
               <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder="Email adress" />
           </div>
           <div className="form-group">
                <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder="Password" minLength="6" />
            </div>
                <input type="submit" value="Login" className="btn btn-primary" />
       </form>
       <p className="my-1">
           Don't have an account? 
           <Link to="/register"> Sign Up</Link>
       </p>
    </section>
    )
  }
}
export default Login;