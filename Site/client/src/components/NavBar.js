import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

class NavBar extends Component {
  
  logOut(e){
    e.preventDefault();
    Swal.fire({
      title:'Aviso!',
      text:'Deseja mesmo sair?',
      type:'question',
      showConfirmButton:true,
      confirmButtonText:'Sim',
      showCancelButton:true,
      cancelButtonText:'Não'
    }).then(willDelete => {
      localStorage.removeItem('usertoken');
      this.props.history.push('/');
    });
  }
  render() {
    const loginRegLink = (
      <ul>          
        <li><Link to='/profiles'>Devs</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Cadastro</Link></li>
      </ul>
    );
    const userLink = (
      <ul>
        <li><Link to='/profiles'>Devs</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
            <li><Link to='dashboard'><i className="fas fa-user"></i><span className="hide-sm"> Dashboard</span></Link></li>
            <li><a href='/' onClick={this.logOut.bind(this)}><i className="fas fa-sign-out-alt"></i><span className="hide-sm"> Sair</span></a></li>
      </ul>
    );
    return (
      <nav className="navbar bg-dark">
        <h1>
          <a href="/"><i className="fas fa-code"></i> DevConnector</a>
        </h1>
        <ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </ul>
      </nav>
    )
  }
}
export default withRouter(NavBar);