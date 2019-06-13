import axios from 'axios';

export const createEdu = newEducation => {
    return axios
        .post('education/create', {
            instituicao: newEducation.instituicao,
            grau: newEducation.grau,
            area_de_estudo: newEducation.area_de_estudo,
            data_inicio: newEducation.data_inicio,
            data_fim: newEducation.data_fim,
            descricao: newEducation.descricao
        })
        .then(res => {
            return res;
        })
}

export const selectEdu = () => {
    return axios
        .get('education/select', (req, res) => {
            res.send(res);
        })
}