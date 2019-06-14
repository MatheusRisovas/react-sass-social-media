import React, { Component } from 'react'
import {selectPosts, createPost} from './PostsFunctions';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class Posts extends Component {
    constructor(){
        super()
        this.state = {
            descricao:'',
            user:{},
            posts:[]
        };
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const post = {
            descricao:this.state.descricao,
            likes:0,
            dislikes:0,
            fkUsuario:decoded.id
        }

        createPost(post).then(res=>{
            if(res){
                Swal.fire({
                    title:'Sucesso!',
                    text:'Post foi criado com sucesso!',
                    type:'success'
                }).then(willDelete=>{window.location.reload();})
            }else{
                Swal.fire({
                    title:'Erro!',
                    text:'Post não pôde ser criado, tente novamente.',
                    type:'error'
                });
            }
        });
    }

    componentWillMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        selectPosts().then(res=>{
            this.setState({posts:res.data});
        }); 
        
    }

  render() {
    return (
      <section className="container">
       <h1 className="large text-primary">Posts</h1>
       <p className="lead"><i className="fas fa-user"></i> Bem vindo à comunidade.</p>
       <div className="post-form">
           <div className="post-form-header bg-primary">
               <h3>Diga algo...</h3>
           </div>
           <form onSubmit={this.onSubmit} className="form my-1">
               <textarea name='descricao' onChange={this.onChange} cols="30" rows="5" placeholder="Crie seu post..."></textarea>
               <input type="submit" value="Enviar" className="btn btn-dark my-1" />
           </form>
           <div className="posts">
               {this.state.posts.map(post=>(
                <div className="post bg-white my-1">
                   <div>
                       <a href="profile">
                           <img src={post.img_link} alt="" className="round-img" />
                           <h4>{post.nome}</h4>
                       </a>
                   </div>
                   <div>
                       <p className="my-1">
                        {post.descricao}
                       </p>
                       <button className="btn">
                           <i className="fas fa-thumbs-up"></i> <span>{post.likes}</span>
                       </button>
                       <button className="btn">
                           <i className="fas fa-thumbs-down"></i> <span>{post.dislikes}</span>
                       </button>
                       <Link to={`/post/${post.id}`} className="btn btn-primary">Discussão</Link>
                   </div>
               </div>
               ))}
           </div>
       </div>
    </section>
    )
  }
}
export default Posts;