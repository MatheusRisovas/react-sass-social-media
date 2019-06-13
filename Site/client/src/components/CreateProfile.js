import React, { Component } from 'react'
import { selectProfile, updateProfile } from './ProfileFunctions';
import jwt_decode from 'jwt-decode';

class CreateProfile extends Component {

    constructor() {
        super()
        this.state = {
        };
    }
    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        selectProfile(decoded.id).then(res => {
            this.setState(res.data);
        });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value } );
    }
    onSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const user = {
            nome: this.state.nome,
            cargo: this.state.cargo,
            empresa: this.state.empresa,
            cidade: this.state.cidade,
            estado: this.state.estado,
            bio: this.state.bio,
            email: this.state.email,
            img_link:this.state.img_link
        }

        updateProfile(user, decoded.id);
        this.props.history.push('/dashboard');
        }
    render() {
        return (
            <section className="container">
                <h1 className="large text-primary">Edite seu Perfil</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> Vamos pegar algumas informações para fazer teu perfil se destacar.
        </p>
                <small>* = campos obrigatórios</small>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input onChange={this.onChange} value={this.state.nome} type='text' name='nome' placeholder='Nome' />
                        <small className="form-text">Give us an idea of where you are at in your career</small>
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={this.state.cargo} type="text" placeholder="Cargo" name="cargo" />
                        <small className="form-text">Could be your own company or one you work for</small>
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={this.state.empresa} type="text" placeholder="Empresa" name="empresa" />
                        <small className="form-text">Could be your own company or one you work for</small>
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={this.state.cidade} type="text" placeholder="Cidade" name="cidade" />
                        <small className="form-text">City & state suggested (eg. Boston, MA)</small>
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={this.state.estado} type="text" placeholder="Estado" name="estado" />
                        <small className="form-text">Could be your own or a company website</small>
                    </div>
                    <div className="form-group">
                        <textarea onChange={this.onChange} value={this.state.bio} placeholder="Descreva um pouco sobre você..."
                            name="bio" cols='30' rows='10'></textarea>
                        <small className="form-text">Tell us a little about yourself</small>
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChange} value={this.state.img_link} type="text" placeholder="Link da Imagem" name="img_link" />
                        <small className="form-text">Could be your own or a company website</small>
                    </div>
                    <div className="my-2">
                        <button type="button" className="btn btn-light">
                            Add Social Network Links
                </button>
                        <span>Optional</span>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="Twitter URL" name="twitter" />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" />
                    </div>
                    <input type="submit" className="btn btn-primary my-1" value="Submit" />
                    <a className="btn btn-light my-1" href="dashboard">Voltar</a>
                </form>
            </section>
        )
    }
}
export default CreateProfile;