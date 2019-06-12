import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
import {selectProfiles} from './ProfileFunctions';

class Profiles extends Component {
    constructor(){
        super();
        this.state = {
            user:[]
        };
    }
    componentWillMount(){
        selectProfiles().then(res=>{
            console.log(res.data);
            this.setState({user:res.data});            
        });
    }
  render() {
    return (
        <section className="container">
        <h1 className="large text-primary">Developers</h1>
        <p className="lead"><i className="fab fa-connectdevelop"></i> Navegue e conecte com outros desenvolvedores</p>
        <div className="profiles">
        {this.state.user.map((user)=>(
            <div className="profile bg-light">
                <img src={user.img_link} alt="" className="round-img" />
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.position} em {user.company}</p>
                    <p>{user.city}, {user.state}</p>
                    <Link to='/profile' className="btn btn-primary">Ver Perfil</Link>
                </div>
                <ul>
                    <li className="text-primary">
                        <i className="fas fa-check"></i> HTML
                    </li>
                    <li className="text-primary">
                         <i className="fas fa-check"></i> CSS
                     </li>
                     <li className="text-primary">
                             <i className="fas fa-check"></i> Java
                     </li>
                     <li className="text-primary">
                             <i className="fas fa-check"></i> Python
                     </li>
                </ul>
            </div>
        ))}   </div>
     </section>
    )
  }
}
export default Profiles;