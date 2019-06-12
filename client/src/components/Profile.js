import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
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
    selectProfile(decoded.id).then(res=>{
      this.setState({user:res.data});
    })
    selectExp().then(res => {
      this.setState({experiences:res.data});
    });
    selectEdu().then(res => {
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
                <h1 className="large">{this.state.user.name}</h1>
                <p className="lead">{this.state.user.position} em {this.state.user.company}</p>
                <p>{this.state.user.city}, {this.state.user.state}</p>
                <div className="icons my-1">
                    <a href="#">
                        <i className="fas fa-globe fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
            {/* <!-- About --> */}
            <div className="profile-about bg-light p-2">
                <h2 className="text-primary">Descrição do {this.state.user.name}</h2>
                <p>
                  {this.state.user.bio}
                </p>
                <div className="line"></div>
                <h2 className="text-primary">Skill Set</h2>
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
                  <ExperiencesItem key={exp.id} company={exp.company} from_date={exp.from_date} to_date={exp.to_date} 
                  position={exp.position} description={exp.description} />
                )) 
                }
            </div>
            {/* <!-- Education --> */}
            <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">Educação</h2>
                    {this.state.education.map((edu)=>(
                  <EducationItem key={edu.id} institution={edu.institution} from_date={edu.from_date} to_date={edu.to_date} 
                  degree={edu.degree} description={edu.description} />
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
                    <h4><a href="#">Repo One</a></h4>
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
                    <h4><a href="#">Repo Two</a></h4>
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
                    <h4><a href="#">Repo One</a></h4>
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