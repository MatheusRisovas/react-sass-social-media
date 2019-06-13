import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {selectExp} from './ExperiencesFunctions';
import {selectEdu} from './EducationFunctions';
import {selectProfile} from './ProfileFunctions';
import ExperiencesItem from './ExperiencesItem';
import EducationItem from './EducationItem';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor(){
    super()
    this.state = {
      experiences:[],
      education:[],
      user:{}
    };
}
  componentWillMount(){
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log('ID DO USER:'+this.props.location.state.id);
    selectProfile(decoded.id).then(res=>{
      this.setState({user:res.data});
    })
    selectExp(decoded.id).then(res => {
      this.setState({experiences:res.data});
    });
    selectEdu(decoded.id).then(res => {
      this.setState({education:res.data});
    });
    console.log(this.state.user.img_link);
    
  }
  render() {
    return (
        <section className="container">
        <Link to='/profiles' className="btn">Voltar aos Perfis</Link>
        <div className="profile-grid my-1">
            {/* <!-- Top --> */}
            <div className="profile-top bg-primary p-2">
                <img src={this.state.user.img_link} alt=""
                    className="round-img my-1" />
                <h1 className="large">{this.state.user.nome}</h1>
                <p className="lead">{this.state.user.cargo} em {this.state.user.empresa}</p>
                <p>{this.state.user.cidade}, {this.state.user.estado}</p>
                <div className="icons my-1">
                    <a href="https://www.google.com.br/">
                        <i className="fas fa-globe fa-2x"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://br.linkedin.com/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
            {/* <!-- About --> */}
            <div className="profile-about bg-light p-2">
                <h2 className="text-primary">Descrição de {this.state.user.nome}</h2>
                <p>
                  {this.state.user.bio}
                </p>
                <div className="line"></div>
                <h2 className="text-primary">Skills</h2>
                <div className="skills">
                    <div className="p-1">
                        <i className="fas fa-check"></i> HTML
                    </div>
                    <div className="p-1">
                        <i className="fas fa-check"></i> CSS
                    </div>
                    <div className="p-1">
                        <i className="fas fa-check"></i> Javascript
                    </div>
                    <div className="p-1">
                        <i className="fas fa-check"></i> Python
                    </div>
                </div>
            </div>
            {/* <!-- Experience --> */}
            <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Experiências</h2>
                {this.state.experiences.map((exp)=>(
                  <ExperiencesItem key={exp.id} company={exp.empresa} from_date={exp.data_inicio} to_date={exp.data_fim} 
                  position={exp.cargo} description={exp.descricao} />
                )) 
                }
            </div>
            {/* <!-- Education --> */}
            <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">Educação</h2>
                    {this.state.education.map((edu)=>(
                  <EducationItem key={edu.id} institution={edu.instituicao} from_date={edu.data_inicio} to_date={edu.data_fim} 
                  degree={edu.grau} description={edu.descricao} />
                )) 
                }
          </div>
          {/* <!-- Git Repos --> */}
          <div className="profile-github">
                <h2 className="text-primary my-1">
                  <i className="fab fa-github"></i> Github Repos
                </h2>
                <div className="repo bg-white my-1 p-1">
                  <div>
                    <h4><a href="https://github.com/">Repo One</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, tenetur.
                    </p>
                  </div>
      
                  <div>
                    <ul>
                      <li className="badge badge-primary">Stars: 44</li>
                      <li className="badge badge-dark">Watchers: 20</li>
                      <li className="badge badge-light">Forks: 25</li>
                    </ul>
                  </div>
                </div>
      
                <div className="repo bg-white my-1 p-1">
                  <div>
                    <h4><a href="https://github.com/">Repo Two</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, tenetur.
                    </p>
                  </div>
      
                  <div>
                    <ul>
                      <li className="badge badge-primary">Stars: 44</li>
                      <li className="badge badge-dark">Watchers: 20</li>
                      <li className="badge badge-light">Forks: 25</li>
                    </ul>
                  </div>
                </div>
      
                <div className="repo bg-white my-1 p-1">
                  <div>
                    <h4><a href="https://github.com/">Repo One</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, tenetur.
                    </p>
                  </div>
      
                  <div>
                    <ul>
                      <li className="badge badge-primary">Stars: 44</li>
                      <li className="badge badge-dark">Watchers: 20</li>
                      <li className="badge badge-light">Forks: 25</li>
                    </ul>
                  </div>
                </div>
      </div>
        </div>
    </section>
    )
  }
}
export default Profile;