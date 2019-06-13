import React, { Component } from 'react'
import {createExp} from './ExperiencesFunctions';
import Swal from 'sweetalert2';

class AddExp extends Component {
    constructor(){
        super()
        this.state = {
            empresa:'',
            cargo:'',
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

        const experience = {
            empresa:this.state.empresa,
            cargo:this.state.cargo,
            data_inicio:this.state.data_inicio,
            data_fim:this.state.data_fim,
            descricao:this.state.descricao
        }

        createExp(experience).then(res=>{
            if(res){
                Swal.fire({
                    title:'Sucesso!',
                    text:'Experiência de trabalho registrada com sucesso!',
                    type:'success'
                }).then(willDelete => this.props.history.push(`/dashboard`));
            }else{
                Swal.fire({
                    title:'Erro!',
                    text:'Experiência de trabalho não pôde ser registrada, tente novamente!',
                    type:'error'
                })
            }
        });
    }
  render() {
    return (
      <section className="container">
        <h1 className="large text-primary">
            Adicione uma Experiência Corporativa
        </h1>
        <p className="lead">
            <i className="fas fa-code-branch"></i> Adicione qualquer experiência passada que tu passou em empresas de TI.
        </p>
        <small>* = campos obrigatórios</small>
        <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="* Empresa" name="empresa" required />
            </div>
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="Cargo" name="cargo" />
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
                <textarea onChange={this.onChange} name="descricao" cols="30" rows="5" placeholder="Descrição do trabalho..."></textarea>
            </div>
            <input type="submit" className="btn btn-primary my-1" value="Registrar" />
            <a className="btn my-1" href="dashboard">Voltar</a>
        </form>
    </section>
    )
  }
}
export default AddExp;