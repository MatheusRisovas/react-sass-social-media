import React, { Component } from 'react'
import {createEdu} from './EducationFunctions';

class AddEdu extends Component {
    constructor(){
        super()
        this.state = {
            institution:'',
            degree:'',
            field_of_study:'',
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

        const education = {
            institution:this.state.institution,
            degree:this.state.degree,
            field_of_study:this.state.field_of_study,
            from_date:this.state.from_date,
            to_date:this.state.to_date,
            description:this.state.description
        }

        createEdu(education).then(res=>{
                this.props.history.push(`/dashboard`);
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
                <input onChange={this.onChange} type="text" placeholder="* Escola ou Instituição" name="institution" required />
            </div>
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="* Grau ou Certificado" name="degree" required />
            </div>
            <div className="form-group">
                <input onChange={this.onChange} type="text" placeholder="Campo de Estudo" name="field_of_study" />
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
                <textarea onChange={this.onChange} name="description" cols="30" rows="5" placeholder="Descrição da experiência..."></textarea>
            </div>
            <input type="submit" value='Submit' className="btn btn-primary my-1" />
            <a className="btn my-1" href="dashboard">Voltar</a>
        </form>
    </section>
    )
  }
}
export default AddEdu;