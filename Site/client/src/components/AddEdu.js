import React, { Component } from 'react'
import {createEdu} from './EducationFunctions';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

class AddEdu extends Component {
    constructor(){
        super()
        this.state = {
            instituicao:'',
            grau:'',
            area_de_estudo:'',
            data_inicio:'',
            data_fim:'',
            descricao:''
        }
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const education = {
            instituicao:this.state.instituicao,
            grau:this.state.grau,
            area_de_estudo:this.state.area_de_estudo,
            data_inicio:this.state.data_inicio,
            data_fim:this.state.data_fim,
            descricao:this.state.descricao,
            fkUsuario: decoded.id
        }

        createEdu(education).then(res=>{
            if(res){
                Swal.fire({
                    title:'Sucesso!',
                    text:'Experiência acadêmica foi registrada com sucesso!',
                    type:'success'
                }).then(willDelete=>{this.props.history.push(`/dashboard`);})
            }else{
                Swal.fire({
                    title:'Erro!',
                    text:'Experiência acadêmica não pôde ser registrada, tente novamente.',
                    type:'error'
                });
            }
        });
    }
  render() {
    return (
      <section className="container">
        <h1 className="large text-primary">
            Adicione Uma Experiência Acadêmica
        </h1>
        <p className="lead">
            <i className="fas fa-graduation-cap"></i> Adicione qualquer escola, curso, universidade a qual tu tenhas frequentado.
        </p>
        <small>* = campos obrigatórios</small>
        <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="* Escola ou Instituição" name="instituicao" required />
            </div>
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="* Grau ou Certificado" name="grau" required />
            </div>
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="Campo de Estudo" name="area_de_estudo" />
            </div>
            <div className="form-group">
                <h4>Período Inicial</h4>
                <input onChange={this.onChange} type="date" name="data_inicio" />
            </div>
            <div className="form-group">
                <h4>Período Final</h4>
                <input onChange={this.onChange} type="date" name="data_fim" />
            </div>
            <div className="form-group">
                <textarea onChange={this.onChange} name="descricao" cols="30" rows="5" placeholder="Descrição da experiência..."></textarea>
            </div>
            <input type="submit" value='Registrar' className="btn btn-primary my-1" />
            <a className="btn my-1" href="dashboard">Voltar</a>
        </form>
    </section>
    )
  }
}
export default AddEdu;