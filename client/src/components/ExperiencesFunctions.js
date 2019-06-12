import axios from 'axios';

export const createExp = newExperience=>{
    return axios
    .post('experience/create',{
        company:newExperience.company,
        position:newExperience.position,
        from_date:newExperience.from_date,
        to_date:newExperience.to_date,
        description:newExperience.description
    })
    .then(res=>{
        console.log("Created Exp");
    })
}

export const selectExp = ()=>{
    return axios
    .get('experience/select',(req,res) => {
        res.send(res);
    })
}