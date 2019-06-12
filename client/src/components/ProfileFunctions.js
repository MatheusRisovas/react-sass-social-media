import axios from 'axios';

export const updateProfile = (Profile,ID)=>{
    return axios
    .post('user/update',{
        name:Profile.name,
        position:Profile.position,
        company:Profile.company,
        city:Profile.city,
        state:Profile.state,
        bio:Profile.bio,
        email: Profile.email,
        img_link:Profile.img_link,
        id:ID
    })
    .then(res=>{
       return res;
    })
}

export const selectProfile = (ID) => {
    return axios
        .get(`user/select`, {
            params:
            {
                id: ID
            }
        }, (req, res) => {
            res.send(res);
        })
}
export const selectProfiles = () => {
    return axios
        .get(`user/select_all`, (req, res) => {
            res.send(res);
        })
}