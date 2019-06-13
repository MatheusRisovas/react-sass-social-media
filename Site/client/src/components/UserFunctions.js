import axios from 'axios';

export const register = newUser => {
    console.log(JSON.stringify(newUser));

    return axios
        .post('user/register', {
            name: newUser.name,
            email: newUser.email,
            img_link: newUser.img_link,
            password: newUser.password
        })
        .then(res => {
            return res;
        })
}

export const login = user => {
    console.log(user);
    return axios
        .post('user/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
}