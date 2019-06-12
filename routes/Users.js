const express = require('express');
const user = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
user.use(cors());

process.env.SECRET_KEY = 'secret';

user.get(`/select`,(req,res)=>{
    User.findOne({
        where:{
            id:req.query.id
        }
    })
    .then(user => {
        res.send(user);
    });
})

user.get(`/select_all`,(req,res)=>{
    User.findAll()
    .then(user => {
        res.send(user);
    });
})

user.post('/update',(req,res)=>{
    User.update(
        {
        name:req.body.name,
        position:req.body.position,
        company:req.body.company,
        city:req.body.city,
        state:req.body.state,
        bio:req.body.bio,
        email: req.body.email,
        password: req.body.password,
        img_link:req.body.img_link
        },
        {
            where:{
                id:req.body.id
            }
        }
    )
    .then(res=>{return res;});
});

user.post('/register',(req,res)=>{
    const today = new Date();
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password = hash;
                User.create(userData)
                .then(user=>{
                    res.json({status: user.email + 'registered'});
                })
                .catch(err=>{
                    res.send('Error: '+ err)
                })
            });
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err=>{
        res.send('Error: '+ err);
    })
});

user.post('/login',(req,res)=>{
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token); 
            }
        }else{
            res.status(400).json({ error: 'User does not exist.'})
        }
    })
    .catch(err=>{
        res.status(400).json({ error: err})
    })
})

module.exports = user;