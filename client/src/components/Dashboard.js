import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import { selectProfile } from './ProfileFunctions';
import { selectExp } from './ExperiencesFunctions';
import {selectEdu} from './EducationFunctions';


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            user:{},
            experiences:[],
            education:[]
        };
    }
    componentWillMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        selectProfile(decoded.id).then(res=>{
            this.setState({user:res.data});
        }); 
        selectExp().then(res=>{
            this.setState({experiences:res.data});            
        });
        selectEdu().then(res=>{
            this.setState({education:res.data});
        })
    }

  render() {
    return (
        <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead"><i className="fas fa-user"></i> Olá {this.state.user.name}</p>
        <div className="dash-buttons">
            <a href="create-profile" className="btn"><i className="fas fa-user-circle text-primary"></i> Editar Perfil</a>
            <a href="add-experience" className="btn"><i className="fab fa-black-tie text-primary"></i> Add Experiência</a>
            <a href="add-education" className="btn"><i className="fas fa-graduation-cap text-primary"></i> Add Acadêmica</a>
        </div>
        <h2 className="my-2">
            Credenciais Corporativas
        </h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Empresa</th>
                    <th className="hide-sm">Cargo</th>
                    <th className="hide-sm">Período</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.experiences.map(exp=>(
                    <tr>
                    <td>{exp.company}</td>
                    <td className="hide-sm">{exp.position}</td>
                    <td className="hide-sm">{exp.from_date} até {exp.to_date}</td>
                    <td><button className="btn btn-danger">Apagar</button></td>
                </tr>
                ))}    
            </tbody>
        </table>
        <h2 className="my-2">
            Credenciais Acadêmicas
        </h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Instituição</th>
                    <th className="hide-sm">Grau</th>
                    <th className="hide-sm">Período</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {this.state.education.map(edu=>(
                    <tr>
                    <td>{edu.institution}</td>
                        <td className="hide-sm">{edu.degree}</td>
                    <td className="hide-sm">{edu.from_date} até {edu.to_date}</td>
                    <td><button className="btn btn-danger">Apagar</button></td>
                </tr>
                ))}   
            </tbody>
        </table>
        <div className="my-2">
            <button className="btn btn-danger">
                <i className="fas fa-user-minus"></i> Apagar Minha Conta
            </button>
        </div>
    </section>
    )
  }
}
export default Dashboard;