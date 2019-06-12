import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {register} from './UserFunctions';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const user = {
            name:this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        if(this.state.password === this.state.confirmPassword){
        register(user).then(res=>{
                this.props.history.push(`/login`);
        });
    }else{
        alert(`Confirmação da senha inválida!`);
        }
    }
  render() {
    return (
        <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
                <input type="text" name='name' value={this.state.name} onChange={this.onChange} placeholder="Name" required />
            </div>
            <div className="form-group">
                <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder="Email adress" />
                <small className="form-text">
                    This site uses Gravatar, so if you want a profile image
                    ,use a Gravatar email
                </small>
            </div>
            <div className="form-group">
                 <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder="Password" minLength="6" />
             </div>
             <div className="form-group">
                     <input type="password" name='confirmPassword' onChange={this.onChange} value={this.state.confirmPassword} placeholder="Confirm password" minLength="6" />
                 </div>
                 <input type="submit" value="Register" className="btn btn-primary" />
        </form>
        <p className="my-1">
            Already have an account?
            <Link to='/login'>Sign In</Link>
        </p>
     </section>
    )
  }
}
export default Register;