import axios from 'axios';

export const selectPosts = () => {
    return axios
        .get('posts/select_all', (req, res) => {
            res.send(res);
        });
}

export const createPost = newPost => {
    return axios
        .post('posts/create', {
            descricao: newPost.descricao,
            likes: newPost.likes,
            dislikes: newPost.dislikes,
            fkUsuario: newPost.fkUsuario
        })
        .then(res => {
            return res;
        })
}