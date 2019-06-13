import axios from 'axios';

export const createExp = newExperience => {
    return axios
        .post('experience/create', {
            empresa: newExperience.empresa,
            cargo: newExperience.cargo,
            data_inicio: newExperience.data_inicio,
            data_fim: newExperience.data_fim,
            descricao: newExperience.descricao
        })
        .then(res => {
            return res;
        })
}

export const selectExp = () => {
    return axios
        .get('experience/select', (req, res) => {
            res.send(res);
        })
}