import React, { Component } from 'react'
import {createExp} from './ExperiencesFunctions';

class AddExp extends Component {
    constructor(){
        super()
        this.state = {
            company:'',
            position:'',
            from_date:'',
            to_date:'',
            description:''
        }
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();

        const experience = {
            company:this.state.company,
            position:this.state.position,
            from_date:this.state.from_date,
            to_date:this.state.to_date,
            description:this.state.description
        }

        createExp(experience).then(res=>{
                this.props.history.push(`/dashboard`);
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
                <input onChange={this.onChange} type="text" placeholder="* Empresa" name="company" required />
            </div>
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="Cargo" name="position" />
            </div>
            <div className="form-group">
                <h4>Período Inicial</h4>
                <input onChange={this.onChange} type="date" name="from_date" />
            </div>
            <div className="form-group">
                <h4>Período Final</h4>
                <input onChange={this.onChange} type="date" name="to_date" />
            </div>
            <div className="form-group">
                <textarea onChange={this.onChange} name="description" cols="30" rows="5" placeholder="Descrição do trabalho..."></textarea>
            </div>
            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn my-1" href="dashboard">Voltar</a>
        </form>
    </section>
    )
  }
}
export default AddExp;