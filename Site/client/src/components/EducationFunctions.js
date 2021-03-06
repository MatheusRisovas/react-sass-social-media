import axios from 'axios';

export const createEdu = newEducation => {
    return axios
        .post('education/create', {
            instituicao: newEducation.instituicao,
            grau: newEducation.grau,
            area_de_estudo: newEducation.area_de_estudo,
            data_inicio: newEducation.data_inicio,
            data_fim: newEducation.data_fim,
            descricao: newEducation.descricao,
            fkUsuario: newEducation.fkUsuario
        })
        .then(res => {
            return res;
        })
}

export const selectEdu = (id) => {
    return axios
        .get('../education/select', {
            params: {
                id: id
            }
        }, (req, res) => {
            res.send(res);
        })
}

export const deleteEdu = (id) => {
    return axios.post('education/delete', {
            id: id
        })
        .then(res => {
            return res;
        })
}