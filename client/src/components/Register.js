import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { register } from './UserFunctions';
import Swal from 'sweetalert2';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            img_link: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            img_link: this.state.img_link,
            password: this.state.password
        }
        if (this.state.password === this.state.confirmPassword) {
            register(user).then(res => {
                if (res) {
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Registro realizado com sucesso!',
                        type: 'success',
                        button: 'Ok!'
                    }).then(a => {
                        this.props.history.push(`/login`);
                    });
                } else {
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Email / senha inválidos!',
                        type: 'error'
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Confirmação da senha inválida!',
                type: 'error'
            });
        }
    }
    render() {
        return (
            <section className="container">
                <h1 className="large text-primary">Cadastro</h1>
                <p className="lead"><i className="fas fa-user"></i> Crie sua conta</p>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input type="text" name='name' value={this.state.name} onChange={this.onChange} placeholder="Nome" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name='img_link' value={this.state.img_link} onChange={this.onChange} placeholder="Link da Imagem" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder="Senha" minLength="6" />
                    </div>
                    <div className="form-group">
                        <input type="password" name='confirmPassword' onChange={this.onChange} value={this.state.confirmPassword} placeholder="Confirme sua senha" minLength="6" />
                    </div>
                    <input type="submit" value="Cadastrar" className="btn btn-primary" />
                </form>
                <p className="my-1">
                    Já possui uma conta?
            <Link to='/login'> Login</Link>
                </p>
            </section>
        )
    }
}
export default Register;