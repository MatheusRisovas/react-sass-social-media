const express = require('express');
const experience = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Experience = require('../models/Experience');
experience.use(cors());

process.env.SECRET_KEY = 'secret';

experience.post('/create', (req, res) => {
    const experienceData = {
        company:req.body.company,
        position:req.body.position,
        from_date:req.body.from_date,
        to_date:req.body.to_date,
        description:req.body.description
    }
    Experience.create(experienceData)
        .then(experience => {
            res.json({ status: experience.id + 'registered' });
        })
        .catch(err => {
            res.send('Error: ' + err)
        });
});

experience.get('/select',(req,res)=>{
    Experience.findAll()
    .then(experiences => res.send(experiences));
});

module.exports = experience;