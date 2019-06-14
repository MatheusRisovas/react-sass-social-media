import React, { Component } from 'react';
import { selectPost, createComent, selectComents } from './PostsFunctions';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

class Post extends Component {
    constructor(){
        super()
        this.state = {
            novoComent:'',
            post:{},
            comentarios:[]
        };
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const coment = {
            descricao:this.state.novoComent,
            fkUsuario:decoded.id,
            fkPost:this.state.post.id
        }
        createComent(coment).then(res=>{
            if(res){
                Swal.fire({
                    title:'Sucesso!',
                    text:'Comentário foi criado com sucesso!',
                    type:'success'
                }).then(willDelete=> window.location.reload());
            }else{
                Swal.fire({
                    title:'Erro!',
                    text:'Comentário não pode ser criado, tente novamente.',
                    type:'error'
                });
            }
        });
    }
    componentDidMount(){
        let {postId} = this.props.match.params;
        console.log(`ID: ${postId}`);
        selectPost(postId).then(res=>{
          this.setState({post:res.data});
        });
        selectComents(postId).then(res=>this.setState({comentarios:res.data}));
      }
  render() {
    return (
      <section className="container">
        <a href="../posts" className="btn">Voltar Aos Posts</a>
        <div className="post bg-white p-1 my-1">
            <div>
                <a href="profile">
                    <img src={this.state.post.img_link} alt=""
                        className="round-img" />
                    <h4>{this.state.post.nome}</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                    {this.state.post.descricao}
                </p>
            </div>
        </div>
        <div className="post-form">
            <div className="post-form-header bg-primary">
                <h3>Deixe seu comentário.</h3>
            </div>
            <form onSubmit={this.onSubmit} className="form my-1">
                <textarea name="text" cols="30" rows="5" onChange={this.onChange} name='novoComent' placeholder="Digite seu comentário..."></textarea>
                <input type="submit" value="Enviar" className="btn btn-dark my-1" />
            </form>
        </div>
        {this.state.comentarios.map(comentario =>(
            <div className="post bg-white my-1">
            <div>
                <a href="profile">
                    <img src={comentario.img_link} alt=""
                        className="round-img" />
                    <h4>{comentario.nome}</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                    {comentario.descricao}
                </p>
            </div>
        </div>
        ))}
    </section>
    )
  }
}
export default Post;