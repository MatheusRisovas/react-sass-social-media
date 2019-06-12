import axios from 'axios';

export const createEdu = newEducation=>{
    return axios
    .post('education/create',{
        institution:newEducation.institution,
        degree:newEducation.degree,
        field_of_study:newEducation.field_of_study,
        from_date:newEducation.from_date,
        to_date:newEducation.to_date,
        description:newEducation.description
    })
    .then(res=>{
        console.log("Created Edu");
    })
}

export const selectEdu = ()=>{
    return axios
    .get('education/select',(req,res) => {
        res.send(res);
    })
}