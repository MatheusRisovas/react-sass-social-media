import axios from 'axios';

export const createExp = newExperience => {
    return axios
        .post('experience/create', {
            empresa: newExperience.empresa,
            cargo: newExperience.cargo,
            data_inicio: newExperience.data_inicio,
            data_fim: newExperience.data_fim,
            descricao: newExperience.descricao,
            fkUsuario: newExperience.fkUsuario
        })
        .then(res => {
            return res;
        })
}

export const selectExp = (id) => {
    return axios
        .get('experience/select', {
            params: {
                id: id
            }
        }, (req, res) => {
            res.send(res);
        })
}

export const deleteExp = (id) => {
    return axios.post('experience/delete', {
            id: id
        })
        .then(res => {
            return res;
        })
}