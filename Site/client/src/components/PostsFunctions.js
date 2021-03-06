import axios from 'axios';

export const selectPosts = () => {
    return axios
        .get('posts/select_all', (req, res) => {
            res.send(res);
        });
}

export const selectPost = (id) => {
    return axios
        .get(`../posts/select`, { params: { id } }, (req, res) => {
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

export const createComent = newComent => {
    return axios
        .post('../posts/create_comment', {
            descricao: newComent.descricao,
            fkUsuario: newComent.fkUsuario,
            fkPost: newComent.fkPost
        })
        .then(res => {
            return res;
        })
};

export const selectComents = (id) => {
    return axios
        .get('../posts/select_comment', { params: { id } }, (req, res) => {
            res.send(res);
        });
}