import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { login } from './UserFunctions';
import Swal from 'sweetalert2';
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Login realizado com sucesso!',
                    type: 'success',
                    button: 'Ok!'
                }).then(a => {
                    this.props.history.push(`/dashboard`);
                });
            } else {
                console.log("User does not exist");
                Swal.fire({
                    title: 'Erro!',
                    text: 'Email / senha inválidos!',
                    type: 'error'
                });
            }
        });
    }
    render() {
        return (
            <section className="container">
                {/* <!-- Alert --> */}
                {/* <div className="alert alert-danger">Invalid Credentials</div> */}
                <h1 className="large text-primary">Login</h1>
                <p className="lead"><i className="fas fa-user"></i> Faça o login na sua conta!</p>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder="Senha" minLength="6" />
                    </div>
                    <input type="submit" value="Login" className="btn btn-primary" />
                </form>
                <p className="my-1">
                    Não possui uma conta?
           <Link to="/register"> Cadastro</Link>
                </p>
            </section>
        )
    }
}
export default Login;