const express = require('express');
const education = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Education = require('../models/Education');
education.use(cors());

process.env.SECRET_KEY = 'secret';

education.post('/create', (req, res) => {
    const educationData = {
        institution:req.body.institution,
        degree:req.body.degree,
        field_of_study:req.body.field_of_study,
        from_date:req.body.from_date,
        to_date:req.body.to_date,
        description:req.body.description
    }
    Education.create(educationData)
        .then(education => {
            res.json({ status: education.id + 'registered' });
        })
        .catch(err => {
            res.send('Error: ' + err)
        });
});

education.get('/select',(req,res)=>{
    Education.findAll()
    .then(educations => res.send(educations));
});

module.exports = education;